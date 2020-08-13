const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
let body = document.getElementsByTagName("body")[0]
var positionInfo = document.getElementById("canvas").getBoundingClientRect();
let screenWidth = positionInfo.width
let screenHeight = positionInfo.height
let height = Math.floor(screenHeight / 1.5)
let width = Math.floor(screenWidth / 1.5)
canvas.height = height
canvas.width = width
canvas2.height = height
canvas2.width = width

function createMatrix() {
    let matrix = []
    for (let i = 0; i < height; i++) {
        let row = new Uint8Array(width)
        matrix.push(row)
    }
    return matrix
}
let matrix = createMatrix()

function redirect(url, samePage) {
    if (samePage) {
        location.href = window.location.origin + url
    } else {
        location.href = "https://" + url
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function drawCanvas(toDraw, context, color, erase) {
    let drawHeight = toDraw.length
    let drawWidth = toDraw[0].length
    let rgbObj = hexToRgb(color)
    let rgb = [rgbObj.r, rgbObj.g, rgbObj.b]
    let data
    if (erase) {
        data = new Uint8ClampedArray(width * height * 4).fill(0)
    } else {
        data = context.getImageData(0, 0, width, height).data
    }
    let counter = 0
    for (let i = 0; i < drawHeight; i++) {
        for (let j = 0; j < drawWidth; j++) {
            if (data[counter + 3]) {
                counter += 4
            } else {
                let cell = toDraw[i][j]
                data[counter++] = rgb[0]
                data[counter++] = rgb[1]
                data[counter++] = rgb[2]
                if (cell) {
                    data[counter++] = 255
                } else {
                    data[counter++] = 0
                }
            }
        }
    }
    context.putImageData(new ImageData(data, width, height), 0, 0)
}

function eraseCanvas(context) {
    context.clearRect(0, 0, width, height);
}

function generateRandomMatrix(bias) {
    let matrix = []
    for (let i = 0; i < height; i++) {
        let row = []
        for (let j = 0; j < width; j++) {
            row.push(Math.round(Math.random() - bias))
        }
        matrix.push(row)
    }
    return matrix
}
window.addEventListener("touchmove", event => {
    let x = Math.floor((event.touches[0].pageX / screenWidth) * width)
    let y = Math.floor(((event.touches[0].pageY - window.scrollY) / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 30)
    drawMatrix(x, y, noise)
})

let canDraw = true
window.addEventListener("mousedown", function () {
    canDraw = true
})
window.addEventListener("mouseup", function () {
    //canDraw = true
})
window.addEventListener("wheel", function () {
    //canDraw = true
})
window.addEventListener("mousemove", event => {
    if (!canDraw) return
    let x = Math.floor((event.pageX / screenWidth) * width)
    let y = Math.floor(((event.pageY - window.scrollY) / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 30)
    drawMatrix(x, y, noise)
})


function drawMatrix(x, y, noise) {
    try {
        for (let i = 0; i < noise; i++) {
            let noiseX = Math.round(Math.random() * -20 + 15)
            let noiseY = Math.round(Math.random() * -20 + 15)
            matrix[y + noiseY][x + noiseX] = 1
        }
    } catch (e) {}
}

function calculateGeneration() {
    let nextGen = createMatrix()
    let width = nextGen[0].length - 1
    let height = nextGen.length - 1
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            let neighbours = 0
            if (matrix[i - 1][j - 1]) neighbours++
            if (matrix[i - 1][j]) neighbours++
            if (matrix[i - 1][j + 1]) neighbours++
            if (matrix[i][j - 1]) neighbours++
            if (matrix[i][j + 1]) neighbours++
            if (matrix[i + 1][j - 1]) neighbours++
            if (matrix[i + 1][j]) neighbours++
            if (matrix[i + 1][j + 1]) neighbours++
            if (!matrix[i][j]) {
                //If cell is dead
                if (neighbours == 3) {
                    nextGen[i][j] = 1
                }
            } else {
                //If cell is alive
                if (neighbours < 2 || neighbours > 3) {
                    nextGen[i][j] = 0
                } else {
                    nextGen[i][j] = 1
                }
            }
        }
    }
    return nextGen
}
drawCanvas(matrix, ctx, "#DA0363", true)
let every60 = 0
let secondContextColor = "black"
let generations = []
let every5 = 5

function handleFrame() {
    eraseCanvas(ctx)
    if (isStopped) {
        drawCanvas(matrix, ctx, "#DA0363", true)
    } else {
        let nextGen = calculateGeneration()
        every60++
        every5++
        if (every60 > 30) {
            secondContextColor = getRandomColor()
            every60 = 0
        }
        if (generations.length > 15) {
            generations.shift()
            generations.push(nextGen)
        } else {
            generations.push(nextGen)
        }
        if (trailToggled) {
            every5 = 0
            drawCanvas(generations[0], ctx2, secondContextColor, false)
        }
        drawCanvas(nextGen, ctx, "#DA0363", true)
        matrix = nextGen
    }
    window.requestAnimationFrame(handleFrame)
    calcFps()
}

let palette = {
    0: ['#283049', '#404B69', '#278EA5'],
    1: ['#4b5d67', '#1f4068', '#30475e', '#3282b8'],
    2: ['', '', '', ''],
    3: ['', '', '', ''],
    4: ['', '', '', '']
}

function getRandomColor() {
    return palette[0][Math.floor(Math.random() * palette[0].length)]
}
let trailToggled = false

function toggleTrail() {
    trailToggled = !trailToggled
}
isStopped = false

function stop() {
    isStopped = !isStopped
    let stopButton = document.getElementById("stopBtn")
    if (isStopped) {
        stopButton.innerHTML = "Play"
    } else {
        stopButton.innerHTML = "Stop"
    }
}

function random() {
    matrix = generateRandomMatrix(0.4)
}

function erase() {
    matrix = createMatrix()
    eraseCanvas(ctx)
    eraseCanvas(ctx2)
}

function toggleUtils() {
    let utils = document.getElementById("utils")
    utils.classList.toggle("hide")
}
window.requestAnimationFrame(handleFrame)

let fps = 0
let lastCalledTime = 0

function calcFps() {
    if (!lastCalledTime) {
        lastCalledTime = Date.now();
        fps = 0;
        return;
    }
    delta = (Date.now() - lastCalledTime) / 1000;
    lastCalledTime = Date.now();
    fps = Math.floor(1 / delta)
}
setInterval(() => {
    document.getElementById("fps").innerHTML = fps
}, 400);