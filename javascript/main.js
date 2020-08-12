const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
var positionInfo = document.getElementById("canvas").getBoundingClientRect();
let screenWidth = positionInfo.width
let screenHeight = positionInfo.height
let height = screenHeight / 1.5
let width = screenWidth / 1.5
canvas.height = height
canvas.width = width
canvas2.height = height
canvas2.width = width
function createMatrix() {
    let matrix = []
    for (let i = 0; i < height; i++) {
        let row = []
        for (let j = 0; j < width; j++) {
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

let matrix = createMatrix()

function drawCanvas(toDraw, context, color) {
    let cellSize = 1
    let drawHeight = toDraw.length
    let drawWidth = toDraw[0].length
    let currentHeight = 0
    let currentwidth = 0
    context.fillStyle = color
    for (let i = 0; i < drawHeight; i++) {
        currentHeight += cellSize
        for (let j = 0; j < drawWidth; j++) {
            currentwidth += cellSize
            let cell = toDraw[i][j]
            if (cell == 1) {
                context.fillRect(currentwidth, currentHeight, cellSize, cellSize)
            }
        }
        currentwidth = 0
    }

}

function eraseCanvas(context, color) {
    context.clearRect(0, 0, width, height);
    /*
   if(color == "transparent"){

   }else{
    ctx.fillStyle = color
    ctx.fillRect(0, 0, width, height)
   }
   */
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
canvas.addEventListener("touchmove", event => {
    let x = Math.floor((event.touches[0].clientX / screenWidth) * width)
    let y = Math.floor((event.touches[0].clientY / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 30)
    drawMatrix(x, y, noise)
})

let canDraw = false
canvas.addEventListener("mousedown", function () {
    canDraw = true
})
canvas.addEventListener("mouseup", function () {
    canDraw = false
})
canvas.addEventListener("mousemove", event => {
    if (!canDraw) return
    let x = Math.floor((event.offsetX / screenWidth) * width)
    let y = Math.floor((event.offsetY / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 40)
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
drawCanvas(matrix, ctx, "white")
let every60 = 0
let secondContextColor = "black"
let generations = []
let every5 = 5

function handleFrame() {
    if (isStopped){
        drawCanvas(matrix, ctx, "#DA0363")
    }else{
        let nextGen = calculateGeneration()
        every60++
        every5++
        if (every60 > 60) {
            secondContextColor = getRandomColor()
            every60 = 0
        }
        if (generations.length > 10) {
            generations.shift()
            generations.push(nextGen)
        } else {
            generations.push(nextGen)
        }
        if (trailToggled) {
            every5 = 0
            drawCanvas(generations[0], ctx2, getRandomColor())
        }
        eraseCanvas(ctx)
        drawCanvas(nextGen, ctx, "#DA0363")
        matrix = nextGen
    }

    requestAnimationFrame(handleFrame)
}
requestAnimationFrame(handleFrame);
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
}

function random(){
    matrix = generateRandomMatrix(0.4)
}
function erase(){
    matrix = createMatrix()
    eraseCanvas(ctx)
    eraseCanvas(ctx2)
}

function toggleUtils(){
    let utils = document.getElementById("utils")
    utils.classList.toggle("hide")
}