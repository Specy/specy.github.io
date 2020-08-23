let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let hasGenerated = false

function generateImage() {
    let text = document.getElementById("text").value
    if (text == "") return
    let shift = parseInt(document.getElementById("shiftPicker").value)
    let image = SP_Code.createImage(text, shift)
    canvas.width = image.width
    canvas.height = image.height
    hasGenerated = true
    SP_Code.drawOnCanvas(image, canvas)
}

function downloadImage() {
    if (hasGenerated) SP_Code.downloadImageFromData(ctx.getImageData(0, 0, canvas.width, canvas.height), "SP_Code_demo")
}

function drawEmptyCanvas() {
    let data = new ImageData(new Uint8ClampedArray(50 * 50 * 4).fill(255), 50, 50)
    canvas.width = data.width
    canvas.height = data.height
    return data
}

function drawOnImage() {
    let x = 10
    let y = 10
    let text = document.getElementById("text").value
    hasGenerated = true
    let shift = parseInt(document.getElementById("shiftPicker").value)
    ctx.drawImage(selectedImageGlobal, 0, 0);
    let newImage = SP_Code.drawTextOnPicture(ctx.getImageData(0, 0, canvas.width, canvas.height), text, shift, x, y)
    SP_Code.drawOnCanvas(newImage, canvas)
}

let selectedImageGlobal
async function selectImage() {
    let selectedImage = await pickImage()
    selectedImageGlobal = selectedImage
    canvas.width = selectedImage.width
    canvas.height = selectedImage.height
    ctx.drawImage(selectedImage, 0, 0);
}

function pickImage() {
    return new Promise((resolve, reject) => {
        document.getElementById("filePicker").addEventListener("change", function () {
            let fr = new FileReader()
            fr.onload = function () {
                let image = new Image
                image.onload = () => {
                    resolve(image)
                }
                image.src = fr.result
                filePicker.value = ""
            }
            fr.onerror = function (e) {
                reject(e)
            }
            fr.readAsDataURL(this.files[0])
        })
        filePicker.click()
    })
}
async function loadImage() {
    let image = await pickImage()
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0);
    let text = SP_Code.getTextFromImage(ctx.getImageData(0, 0, canvas.width, canvas.height))
    document.getElementById("text").value = text
    Function(text)()
}