

const {
    pow,
    abs,
    sign,
    min,
} = Math


class Mandelbrot {
    constructor(ctx, options) {
        this.viewSize = 4
        this.offsetX = -1 * this.viewSize / 2
        this.offsetY = -1 * this.viewSize / 2
        this.options = options
        this.ctx = ctx
        this.setup()
        this.draw()
    }
    changeViewSize(size,x = 2,y = 0.9) {
        this.viewSize = size
        this.offsetX = x
        this.offsetY = y
        this.setup()
    }
    setup(){
        const { options } = this
        delete this.minIteration
        ctx.clearRect(0, 0, options.width, options.height)
        ctx.fillStyle = this.options.colors.baseColor
        ctx.fillRect(0, 0, options.width, options.height)
        this.imgData = ctx.getImageData(0, 0, options.width, options.height)
        this.iteration = 0
        this.maxIteration = this.options.maxIteration
        this.c = []
        for (let i = 0; i < options.width; i++) {
            this.c[i] = []
            for (let j = 0; j < options.height; j++) {
                const x0 = i * this.viewSize / options.width + this.offsetY
                const y0 = j * this.viewSize / options.height + this.offsetX
                this.c[i][j] = [x0, y0, 0, x0, y0]
            }
        }
    };
    draw() {
        const { imgData, options } = this
        const data = imgData.data
        const rgba = options.colors.rgba(
            this.iteration,
            this.minIteration === undefined ? this.iteration : this.minIteration
        )
        if (this.iteration > options.maxIteration) return
        for (let i = 0; i < options.width; i++) {
            for (let j = 0; j < options.height; j++) {
                const [x, y, iteration, x0, y0] = this.c[i][j]
                if (iteration >= this.iteration) {
                    if (x * x + y * y < 4) {
                        this.c[i][j] = [x * x - y * y + x0, 2 * x * y + y0, iteration + 1, x0, y0]
                    } else {
                        if (this.minIteration === undefined) {
                            this.minIteration = iteration
                        }
                        const p = j * options.width * 4 + i * 4
                        rgba.forEach((e, i) => {
                            data[p + i] = e
                        })
                    }
                }
            }
        }
        ctx.putImageData(this.imgData, 0, 0)
        this.iteration += 1
    };
}



const colorConfigs = {
    'grayscale': {
        bodyBackground: 'white',
        baseColor: 'black',
        rgba: (iteration, minIteration) => [, , , 255 * (1 - pow(0.99, iteration - minIteration))],
    },
    'deep ocean': {
        bodyBackground: '#001',
        backgroundColor: '#6cf',
        baseColor: 'black',
        rgba: (iteration, minIteration) => [, , 17, 255 * pow(0.99, iteration - minIteration)],
    },
    'black and white': {
        baseColor: 'white',
        rgba: () => [, , , 0],
    },
}

const sizeX = window.innerWidth
const sizeY = window.innerHeight
const size = sizeX > sizeY ? sizeY : sizeX
const options = {
    size: size,
    width: size ,
    height: size,
    colors: colorConfigs['deep ocean'],
    maxIteration: 1000,
}

const canvas = document.querySelector('canvas')
canvas.width = options.width
canvas.height = options.height
const ctx = canvas.getContext('2d')


const game = new Mandelbrot(ctx, options)
document.body.style.backgroundColor = options.colors.bodyBackground
document.querySelector("#main").style.backgroundColor = options.colors.backgroundColor
let ticks = 0
canvas.addEventListener('click', (e) => {
    var rect = e.target.getBoundingClientRect();

    const scaleAmount = 0.9
    var x = e.clientX - rect.left; 
    var y = e.clientY - rect.top;
    game.changeViewSize(
        game.viewSize * scaleAmount,
        x,
        y
    )
})
function tick() {

    game.draw()
    window.requestAnimationFrame(tick)
}

tick()



