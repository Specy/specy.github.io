let height = 100
let width = 100
self.onmessage = (event) => {
    let data = event.data
    width = data.width
    height = data.height
    self.postMessage(calculateGeneration(data.matrix))
};


function createMatrix() {
    //function that creates a matrix, in which there will be stored the alive/dead cells
    let matrix = []
    for (let i = 0; i < height; i++) {
        let row = new Uint8Array(width)
        matrix.push(row)
    }
    return matrix
}

function calculateGeneration(matrix) {
    //function that calculates the next generation for Conway's game of life
    let nextGen = createMatrix()
    let width = nextGen[0].length - 1
    let height = nextGen.length - 1
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            //checks for every neighbour, 1 is alive, 0 is dead
            let neighbours = matrix[i - 1][j - 1] +
                matrix[i - 1][j] +
                matrix[i - 1][j + 1] +
                matrix[i][j - 1] +
                matrix[i][j + 1] +
                matrix[i + 1][j - 1] +
                matrix[i + 1][j] +
                matrix[i + 1][j + 1]
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