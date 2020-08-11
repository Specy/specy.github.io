const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
var positionInfo = document.getElementById("canvas").getBoundingClientRect();
let screenWidth = positionInfo.width
let screenHeight = positionInfo.height
let height = screenHeight/2
let width = screenWidth/2
canvas.height = height
canvas.width  = width

function createMatrix(){
    let matrix = []
    for(let i = 0; i<height;i++){
        let row = []
        for(let j = 0; j<width;j++){
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

let matrix = createMatrix()

function drawCanvas(toDraw){
    eraseCanvas()
    let cellSize = 1
    let drawHeight = toDraw.length
    let drawWidth = toDraw[0].length
    let currentHeight = 0
    let currentwidth = 0
    ctx.fillStyle = "white"
    for(let i = 0; i < drawHeight;i++){
        currentHeight +=cellSize
        for(let j = 0; j < drawWidth;j++){
            currentwidth += cellSize
            let cell = toDraw[i][j]
            if(cell == 1){
                ctx.fillRect(currentwidth, currentHeight, cellSize, cellSize)
            }
        }
        currentwidth = 0
    }

}

function eraseCanvas(){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, width, height)
}

function generateRandomMatrix(bias){
    let matrix = []
    for(let i = 0; i<height;i++){
        let row = []
        for(let j = 0; j<width;j++){
            row.push(Math.round(Math.random() - bias))
        }
        matrix.push(row)
    }
    return matrix
}
canvas.addEventListener("touchmove",event =>{
    let x = Math.floor((event.touches[0].clientX / screenWidth) * width)
    let y = Math.floor((event.touches[0].clientY / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 30)
    drawMatrix(x,y,noise)
})

let canDraw = false
canvas.addEventListener("mousedown", function(){canDraw = true})
canvas.addEventListener("mouseup", function(){canDraw = false})
canvas.addEventListener("mousemove",event =>{
    if(!canDraw) return
    let x = Math.floor((event.offsetX / screenWidth) * width)
    let y = Math.floor((event.offsetY / screenHeight) * height)
    let noise = Math.round(Math.random() * 10 + 40)
    drawMatrix(x,y,noise)
})

function drawMatrix(x,y,noise){
    try{
        for(let i = 0; i < noise ; i++){
            let noiseX = Math.round(Math.random() * -20 + 15)
            let noiseY = Math.round(Math.random() * -20 + 15)
            matrix[y+noiseY][x+noiseX] = 1
        }
    }catch(e){}
}
function calculateGeneration(){
    let nextGen = createMatrix()
    let width = nextGen[0].length-1
    let height = nextGen.length-1
    for(let i = 1;i<height;i++){
        for(let j = 1;j<width;j++){
            let neighbours = 0
            if(matrix[i-1][j-1]) neighbours++
            if(matrix[i-1][j]) neighbours++
            if(matrix[i-1][j+1]) neighbours++
            if(matrix[i][j-1]) neighbours++
            if(matrix[i][j+1]) neighbours++
            if(matrix[i+1][j-1]) neighbours++
            if(matrix[i+1][j]) neighbours++
            if(matrix[i+1][j+1]) neighbours++
            if(!matrix[i][j]){
                //If cell is dead
                if(neighbours == 3){
                    nextGen[i][j] = 1
                }
            }else{
                //If cell is alive
                if(neighbours < 2 || neighbours > 3){
                    nextGen[i][j] = 0
                }else{
                    nextGen[i][j] = 1
                }
            }
        } 
    }
    drawCanvas(nextGen)
    matrix = nextGen
}
drawCanvas(matrix)
function handleFrame() {
    calculateGeneration()
    requestAnimationFrame(handleFrame);
  }
requestAnimationFrame(handleFrame);