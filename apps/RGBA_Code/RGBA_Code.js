let RGBA_Code = {}
RGBA_Code.createImage = function (text, beautify = true, bias = 1) {
    let charCodes = []
    for (let i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i))
    }
    let charBytes = []
    if (beautify) {
        charBytes.push(1)
    } else {
        charBytes.push(0)
    }
    for (let i = 0; i < charCodes.length; i++) {
        let code = charCodes[i]
        if (code < 255) {
            charBytes.push(code)
        } else {
            let numOfTimes = Math.floor(code / 254)
            let reminder = code % 254
            for (let i = 0; i < numOfTimes; i++) {
                charBytes.push(254)
            }
            charBytes.push(reminder)
        }
        charBytes.push(255)
        if (beautify) charBytes.push(Math.floor(Math.random() * 254 * bias))
    }
    console.log(charBytes)
    let width = Math.round(Math.sqrt(charBytes.length / 4))
    let height = width
    let imageData = new Uint8ClampedArray(width * height * 4).fill(255)
    for (let i = 0; i < charBytes.length; i++) {
        imageData[i] = charBytes[i]
    }

    return new ImageData(imageData, width, height)
}

RGBA_Code.getTextFromImage = function (image) {
    let data = image.data
    let string = ""
    let charCode = 0
    let isBeautified = Boolean(data[0])
    for (let i = 1; i < data.length; i++) {
        if (data[i] != 255) {
            charCode += data[i]
        } else {
            string += String.fromCharCode(charCode)
            if (isBeautified) i++ //ignore number after
            charCode = 0
        }
    }
    return string
}

RGBA_Code.downloadImage = function (image) {
    var link = document.createElement('a');
    link.download = 'filename.png';
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    let ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled= false
    ctx.putImageData(image, 0, 0)
    link.href = canvas.toDataURL("image/png",1)
    link.click();
}