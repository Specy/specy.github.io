let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let hasGenerated = false
function generateImage() {
    let text = document.getElementById("text").value
    if(text == "")return
    let shift = parseInt(document.getElementById("shiftPicker").value)
    let image = RGBA_Code.createImage(text, shift)
    canvas.width = image.width
    canvas.height = image.height
    hasGenerated = true
    RGBA_Code.drawOnCanvas(image,canvas)
}

function downloadImage() {
    if(hasGenerated) RGBA_Code.downloadImageFromData(ctx.getImageData(0, 0, canvas.width, canvas.height),"RGBA_Code_demo")
}

function loadImage() {
    document.getElementById("filePicker").addEventListener("change", function () {
        let fr = new FileReader()
        fr.onload = function () {
            let image = new Image
            image.onload = () =>{
                canvas.width = image.width
                canvas.height = image.height
                ctx.drawImage(image,0,0);
                let text = RGBA_Code.getTextFromImage(ctx.getImageData(0, 0, canvas.width, canvas.height))
                document.getElementById("text").value = text
            }
            image.src = fr.result
            filePicker.value = ""
        }
        fr.onerror = function () {}
        fr.readAsDataURL(this.files[0])
    })
    filePicker.click()
}