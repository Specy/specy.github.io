let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled= false
let globalImage
function generateImage() {
    let text = document.getElementById("text").value
    let image = RGBA_Code.createImage(text, false, 1)
    canvas.width = image.width
    canvas.height = image.height
    ctx.putImageData(image, 0, 0)
    globalImage = image
}

function downloadImage() {
    if(globalImage != undefined) RGBA_Code.downloadImage(globalImage)
    console.log(globalImage.data)
}

function loadImage() {
    document.getElementById("filePicker").addEventListener("change", function () {
        let fr = new FileReader()
        fr.onload = function () {
            let file = fr.result
            console.log(file)
            let image = new Image
            image.onload = () =>{
                canvas.width = image.width
                canvas.height = image.height
                canvas.style.imageRendering = "pixelated"
                console.log(image)
                ctx.drawImage(image,0,0);
                let text = RGBA_Code.getTextFromImage(ctx.getImageData(0, 0, canvas.width, canvas.height))
                console.log(ctx.getImageData(0, 0, canvas.width, canvas.height).data)
                console.log(text)
            }
            image.src = fr.result
            filePicker.value = ""
        }
        fr.onerror = function () {}
        fr.readAsDataURL(this.files[0])
    })
    filePicker.click()
}