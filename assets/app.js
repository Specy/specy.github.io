const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
const body = document.querySelector("body")
const positionInfo = document.getElementById("canvas").getBoundingClientRect()
const screenWidth = positionInfo.width
const screenHeight = positionInfo.height
let height = Math.floor(screenHeight / 1.5)
let width = Math.floor(screenWidth / 1.5)

//using service worker to offload the computationally hard parts to another thread and leave
//the UI responsive
const worker = new Worker('/assets/conway-worker.js')

//limiting the matrix size to increase performance
const isMobile = screenHeight > screenWidth
const max = 728
if (screenWidth > max) {
    const aspect = screenWidth / screenHeight
    width = max
    height = Math.floor(max / aspect)
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

function hexToRgb(hex) {
    //converts the hex color to RGB, this is then used in the drawing of the canvas
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
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
    let data = erase ? new Uint8ClampedArray(width * height * 4).fill(0) : secondCanvasData
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
    context.clearRect(0, 0, width, height)
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

function takePicture() {
    const finalCanvas = document.createElement("canvas")
    finalCanvas.width = screenWidth * 2
    finalCanvas.height = screenHeight * 2
    finalCanvas.style.imageRendering = "pixelated"

    const finalContext = finalCanvas.getContext("2d")
    finalContext.imageSmoothingEnabled = false
    finalContext.fillStyle = "rgb(15, 13, 25)"
    finalContext.fillRect(0, 0, finalCanvas.width, finalCanvas.height)
    finalContext.drawImage(canvas2, 0, 0, finalCanvas.width, finalCanvas.height)
    finalContext.drawImage(canvas, 0, 0, finalCanvas.width, finalCanvas.height)

    const a = document.createElement("a")
    a.href = finalCanvas.toDataURL("image/png", 1)
    a.download = "picture.png"
    a.click()
}

let mouseScreenWidth = screenWidth
let mouseScreenHeight = screenHeight
window.addEventListener('resize', () => {
    let positionInfo = document.getElementById("canvas").getBoundingClientRect()
    mouseScreenWidth = positionInfo.width
    mouseScreenHeight = positionInfo.height
})
window.addEventListener("mousemove", event => {
    //listen to the mouse moves on the screen and add the selected cells to the matrix
    if (!canDraw) return
    try {
        if (event.path.map(e => e.className).includes("navbar")) return
    } catch (e) { }
    const x = Math.floor((event.pageX / mouseScreenWidth) * width)
    const y = Math.floor(((event.pageY - window.scrollY) / mouseScreenHeight) * height)
    const noise = Math.round(Math.random() * 10 + 30)
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

let lastGen
let lastGenId = 0
async function calculateGeneration(matrix) {
    const res = await threds.send("calculateGeneration", { matrix, width, height })
    const [id, data] = res
    if (id > lastGenId) {
        lastGenId = id
        lastGen = data
        return data
    }
    return lastGen
}

let palette = {
    0: ['#283049', '#404B69', '#278EA5'],
    1: ['#283049', '#404B69', '#278EA5', "#134753"],
}

function getRandomColor(index = 0) {
    //returns a random color from the palette
    return palette[index][Math.floor(Math.random() * palette[index].length)]
}

const fpsController = 30
const rafInterval = 1000 / fpsController
let currentTime = 0
let nextTime = Date.now()
let deltaTime = 0
let every25 = 0
let secondContextColor = getRandomColor(1)
let generations = []
let gameId = 0
async function handleFrame() {
    const id = gameId
    window.requestAnimationFrame(handleFrame)
    currentTime = Date.now()
    deltaTime = currentTime - nextTime
    if (deltaTime > rafInterval) {
        nextTime = currentTime - (deltaTime % rafInterval)
        //function that handles each frame, it clears the canvas and redraws on top of it
        if (isStopped) {
            //if it's stopped, continue to render but don't calculate the next generations
            drawCanvas(matrix, ctx, "#DA0363", true)
        } else {
            let nextGen = await calculateGeneration(matrix)
            if(id !== gameId) return
            if (every25++ > 25) {
                //change color every 30 frames
                secondContextColor = getRandomColor(1)
                every25 = 0
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
    const btns = document.querySelectorAll(".trailBtn")
    btns.forEach(btn => {
        if (trailToggled) {
            btn.style.backgroundColor = palette[0][0]
        } else {
            btn.style.backgroundColor = ""
        }
    })

}

function toggleDropdown() {
    document.querySelector('.navbar-dropdown').classList.toggle('dropdown-visible')
    document.querySelector('.hamburger').classList.toggle('x-visible')
}
let isStopped = false

function stop() {
    //function that stops/plays the calculation of the generation 
    isStopped = !isStopped
    const stopButtons = document.querySelectorAll(".stopBtn")
    stopButtons.forEach(btn => {
        if (isStopped) {
            btn.style.backgroundImage = "url('/assets/icons/play.svg')"
        } else {
            btn.style.backgroundImage = "url('/assets/icons/pause.svg')"
        }
    })

}
const bg = document.querySelector(".background")

function setBgOpacity() {
    //when scrolling the page, after surpassing 30vh, the canvas will start to fade out, reaching at minumum 0.5 opacity
    const scroll = document.documentElement.scrollTop - (screenHeight / 4)
    const opacity = Math.max(0.4, 1 - (scroll / screenHeight))
    bg.style.opacity = opacity
}

document.addEventListener("scroll",setBgOpacity)
setBgOpacity()

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
    let toHide = div.querySelector(".hiddenDiv")
    if (toHide.style.display !== "flex") {
        toHide.style.display = 'flex'
        return goToElement(div, "center")
    }
    toHide.style.display = 'none'
}


function goToElement(element, position = 'start') {
    //function to scroll the body to a selected element, scroll is the offset
    if (typeof element == "string") element = document.getElementById(element)
    if (element.tagName === "A") history.pushState(null, null, element.href)
    element.scrollIntoView({ behavior: "smooth", block: position })
}

function toggleUtils() {
    document.getElementById("utils").classList.toggle("utils-visible")
}

let fps = 0
let lastTime = 0

function calcFps() {
    //function to calculate the current fps of the canvas, mainly for debugging
    if (!lastTime) {
        lastTime = Date.now()
        fps = 0
        return
    }
    let delta = (Date.now() - lastTime) / 1000
    lastTime = Date.now()
    fps = Math.floor(1 / delta)
}
setInterval(() => {
    document.getElementById("fps").innerHTML = fps
}, 1000)

let canDraw = false
async function drawS() {
    //function to draw the S when the page loads
    const offsets = { x: 0, y: -20 }
    let drawing = await fetch("/assets/drawing.json").then(file => file.json())
    await delay(500)
    //fetches the array containing the positions to draw
    for (let i = 0; i < drawing.length - 5; i++) {
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
        let noise = Math.round(Math.random() * 10 + 50)
        await delay(4)
        drawMatrix(x + offsets.x, y + offsets.y, noise)
    }
    canDraw = true
    setTimeout(() => {
        if (trailToggled) toggleTrail()
    }, 3000)
}
drawS()

function bounceArrow() {
    //function that makes the "scroll down" icon bounce
    setTimeout(function () {
        document.getElementById("scrollDown").remove()
    }, 14000)
}
const delay = ms => new Promise(res => setTimeout(res, ms))

class SyncThreads {
    events = new Map()
    id = 0
    worker
    constructor(w) {
        this.worker = w
        this.worker.addEventListener("message", e => {
            this.receive(e.data.id, e.data.data)
        })
    }
    send = (message, data) => {
        let resolve
        this.id++
        const promise = new Promise(res => {
            this.worker.postMessage({ data, message, id: this.id })
            resolve = res
        })
        this.events.set(this.id, { id: this.id, message, promise, resolve })
        return promise
    }

    transfer = (message, data, transfer) => {
        let resolve
        this.id++
        const promise = new Promise(res => {
            this.worker.postMessage({ data, message, id: this.id }, transfer)
            resolve = res
        })
        this.events.set(this.id, { id: this.id, message, promise, resolve })
        return promise
    }
    receive = (id, data) => {
        const event = this.events.get(id)
        if (event) {
            this.events.delete(id)
            event.resolve([id, data])
        }
    }
}

function changeDomain() {
    //change links if the page is hosted on specy.app
    const sky = document.getElementById("sky-music-nightly-link")
    const genshin = document.getElementById("genshin-music-nightly-link")
    if (window.location.hostname.includes("specy.app")) {
        sky.href = "https://sky-music.specy.app"
        genshin.href = "https://genshin-music.specy.app"
    }
}

const olderWork = document.querySelectorAll(".old-work")
const oldWorkButton = document.querySelector(".old-work-wrapper")
function showOlderWork() {
    olderWork.forEach((work, i) => {
        work.classList.add("old-work-visible")
        work.style.animation = `fadeIn 0.5s ease ${i * 0.1}s forwards`
    })
    oldWorkButton.style.display = "none"
}



const threds = new SyncThreads(worker)

bounceArrow()
window.requestAnimationFrame(handleFrame)
changeDomain()