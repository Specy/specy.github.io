const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
let body = document.querySelector("body")
var positionInfo = document.getElementById("canvas").getBoundingClientRect();
let screenWidth = positionInfo.width
let screenHeight = positionInfo.height
let height = Math.floor(screenHeight / 1.5)
let width = Math.floor(screenWidth / 1.5)

//using service worker to offload the computationally hard parts to another thread and leave
//the UI responsive
const worker = new Worker('/assets/service-worker.js')

//limiting the matrix size to increase performance
let isMobile = false
if (screenHeight > screenWidth) {
    isMobile = true
}
if (screenWidth > 1400) {
    height = Math.floor(screenHeight / 1.8)
    width = Math.floor(screenWidth / 1.8)
}
canvas.height = height
canvas.width = width
canvas2.height = height
canvas2.width = width

function createMatrix() {
    //function that creates a matrix, in which there will be stored the alive/dead cells
    let matrix = []
    for (let i = 0; i < height; i++) {
        let row = new Uint8Array(width)
        matrix.push(row)
    }
    return matrix
}
//main matrix, this will store all the current generation data that will be drawn
let matrix = createMatrix()

function redirect(url, samePage) {
    //function to redirect to a new URL 
    if (samePage) {
        location.href = window.location.origin + url
    } else {
        location.href = "https://" + url
    }
}

function hexToRgb(hex) {
    //converts the hex color to RGB, this is then used in the drawing of the canvas
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }
}
//buffer element that stores the second canvas colors, initiates to being fully black 
let secondCanvasData = new Uint8ClampedArray(width * height * 4).fill(0)

function drawCanvas(toDraw, context, color, erase) {
    let drawHeight = toDraw.length
    let drawWidth = toDraw[0].length
    let rgbObj = hexToRgb(color)
    let data
    if (erase) {
        data = new Uint8ClampedArray(width * height * 4).fill(0)
    } else {
        data = secondCanvasData
    }
    //the counter is the individual pixel position in the image, divided in 4, r g b a, 
    let counter = 0
    for (let i = 0; i < drawHeight; i++) {
        for (let j = 0; j < drawWidth; j++) {
            //if the current pixel has never been drawn
            if (data[counter + 3]) {
                //if it has, ignore it and continue
                counter += 4
            } else {
                //if it's not, add each subpixel data
                if (toDraw[i][j]) {
                    //if the cell is alive add the selected color to the data
                    data[counter++] = rgbObj.r
                    data[counter++] = rgbObj.g
                    data[counter++] = rgbObj.b
                    data[counter++] = 255

                } else {
                    //if the cell is dead, turn the pixel black
                    counter += 3
                    data[counter++] = 0
                }
            }
        }
    }
    if (!erase) secondCanvasData = data
    //actually draw the image generated above
    context.putImageData(new ImageData(data, width, height), 0, 0)
}

function eraseCanvas(context) {
    //function to erase the canvas
    context.clearRect(0, 0, width, height);
}

function generateRandomMatrix(bias) {
    //function that generates random cells in the matrix, the bias increases/decreases the amounts of cells created
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (!matrix[i][j]) matrix[i][j] = (Math.round(Math.random() - bias))
        }
    }
    return matrix
}
document.addEventListener("touchmove", event => {
    //listen to the touches on the screen and add the selected cells to the matrix
    let x = Math.floor((event.touches[0].pageX / screenWidth) * width)
    let y = Math.floor(((event.touches[0].pageY - window.scrollY) / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 30)
    drawMatrix(x, y, noise)
})


window.addEventListener("mousemove", event => {
    //listen to the mouse moves on the screen and add the selected cells to the matrix
    if (!canDraw) return
    let x = Math.floor((event.pageX / screenWidth) * width)
    let y = Math.floor(((event.pageY - window.scrollY) / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 30)
    drawMatrix(x, y, noise)
})


function drawMatrix(x, y, noise) {
    //function that adds alive cells to the matrix, the noise is the amount of cells to add which are randomly positioned
    try {
        for (let i = 0; i < noise; i++) {
            let noiseX = Math.round(Math.random() * -20 + 15)
            let noiseY = Math.round(Math.random() * -20 + 15)
            matrix[y + noiseY][x + noiseX] = 1
        }
    } catch (e) { }
}

function calculateGeneration(data) {
    return new Promise(res => {
        worker.postMessage({
            matrix: data,
            width: width,
            height: height
        })
        worker.onmessage = result => { res(result.data) }
    })
}

let palette = {
    0: ['#283049', '#404B69', '#278EA5'],
    1: ['#4b5d67', '#1f4068', '#30475e', '#3282b8'],
    2: ['', '', '', ''],
    3: ['', '', '', ''],
    4: ['', '', '', '']
}

function getRandomColor() {
    //function that returns a random color from the palette
    return palette[0][Math.floor(Math.random() * palette[0].length)]
}

let fpsController = 48;
let currentTime;
let nextTime = Date.now();
let rafInterval = 1000 / fpsController;
let deltaTime;

let every30 = 0
let secondContextColor = getRandomColor()
let generations = []

async function handleFrame() {
    window.requestAnimationFrame(handleFrame);
    currentTime = Date.now();
    deltaTime = currentTime - nextTime;
    if (deltaTime > rafInterval) {
        nextTime = currentTime - (deltaTime % rafInterval);
        //function that handles each frame, it clears the canvas and redraws on top of it
        if (isStopped) {
            //if it's stopped, continue to render but don't calculate the next generations
            drawCanvas(matrix, ctx, "#DA0363", true)
        } else {
            let nextGen = await calculateGeneration(matrix)
            eraseCanvas(ctx)
            if (every30++ > 30) {
                //change color every 30 frames
                secondContextColor = getRandomColor()
                every30 = 0
            }
            //adds each generation to an array, this is made to have some space between the current generation and the next one
            if (generations.length > 15) generations.shift()
            generations.push(nextGen)
            if (trailToggled) {
                //if the trail is toggled, draw on the second canvas the trail
                drawCanvas(generations[0], ctx2, secondContextColor, false)
            }
            drawCanvas(nextGen, ctx, "#DA0363", true)
            matrix = nextGen
        }
        calcFps()
    }
}

let trailToggled = true

function toggleTrail() {
    //function to toggle the trail animation
    trailToggled = !trailToggled
    let btn = document.getElementById("trailBtn")
    if (trailToggled) {
        btn.style.backgroundColor = palette[0][0]
    } else {
        btn.style.backgroundColor = ""
    }
}

let isStopped = false

function stop() {
    //function that stops/plays the calculation of the generation 
    isStopped = !isStopped
    let stopButton = document.getElementById("stopBtn")
    if (isStopped) {
        stopButton.style.backgroundImage = "url('/assets/icons/play.svg')"
    } else {
        stopButton.style.backgroundImage = "url('/assets/icons/pause.svg')"
    }
}
document.getElementById("mainContent").addEventListener("scroll", function () {
    //when scrolling down the page, if it reached the "about me", start blurring the canvas to make it easier to see the text
    let blur = ((this.scrollTop - screenHeight + 100) / 200).toFixed(2)
    if (blur > 1.5 || isMobile) return
    canvas.style.filter = 'blur(' + blur + 'px)'
    canvas2.style.filter = 'blur(' + blur + 'px)'
})

function random() {
    matrix = generateRandomMatrix(0.4)
}

function erase() {
    //function to erase the canvas and the arrays
    matrix = createMatrix()
    generations = []
    secondCanvasData = new Uint8ClampedArray(width * height * 4)
    eraseCanvas(ctx)
    eraseCanvas(ctx2)
}

async function showHiddenDiv(div) {
    //hides all the cells information and displays the current onec
    console.log(div)
    let toHide = div.querySelector(".hiddenDiv")
    if (toHide.style.display !== "block") {
        toHide.style.display = 'block'
        return goToElement(div, 0.98)
    }
    toHide.style.display = 'none'
}


function goToElement(element, scroll = 0.9) {
    //function to scroll the body to a selected element, scroll is the offset
    if (typeof element == "string") element = document.getElementById(element)
    element.scrollIntoView({behavior: "smooth", block: "start"})
}

function toggleUtils() {
    let utils = document.getElementById("utils")
    utils.classList.toggle("hide")
}

let fps = 0
let lastTime = 0

function calcFps() {
    //function to calculate the current fps of the canvas, mainly for debugging
    if (!lastTime) {
        lastTime = Date.now();
        fps = 0;
        return;
    }
    let delta = (Date.now() - lastTime) / 1000;
    lastTime = Date.now();
    fps = Math.floor(1 / delta)
}
setInterval(() => {
    document.getElementById("fps").innerHTML = fps
}, 1000);

let canDraw = false
async function drawS() {
    //function to draw the S when the page loads
    let drawing = await fetch("/assets/drawing.json").then(file => file.json())
    //fetches the array containing the positions to draw
    for (let i = 0; i < drawing.length; i++) {
        //iterates through all the points and gives an offset according if the device is a mobile phone or pc
        //positions are in percentage
        let pos = drawing[i]
        let x = Math.floor((pos[0] - 7) / 100 * width)
        if (screenWidth > screenHeight) {
            x = Math.floor((pos[0] / 3 + 30) / 100 * width)
            pos[1] = +pos[1] * 1.2 - 6
        }
        pos[1] = +pos[1] + 7
        let y = Math.floor(pos[1] / 100 * height)
        let noise = Math.round(Math.random() * 10 + 30)
        await delay(4)
        drawMatrix(x, y, noise)
    }
    canDraw = true
    setTimeout(() => {
        if (trailToggled) toggleTrail()
    }, 3000);
}
drawS()

function download() {
    //function to download the canvas data to a png
    var link = document.createElement('a');
    link.download = 'CGOLdrawing.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}

function bounceArrow() {
    //function that makes the "scroll down" icon bounce
    setTimeout(function () {
        document.getElementById("scrollDown").classList.add('hidden')
    }, 14000)
}
bounceArrow()
drawCanvas(matrix, ctx, "#DA0363", true)
window.requestAnimationFrame(handleFrame)
const delay = ms => new Promise(res => setTimeout(res, ms))