let RGBA_Code = {}
RGBA_Code.createImage = function (text, shift = 0) {
    let charCodes = []
    //convert all letters to UTF-16 number
    for (let i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i))
    }
    let charBytes = [1]
    //Adds a 1 bit offset, without it the image looks almost completely green
    for (let i = 0; i < charCodes.length; i++) {
        let code = charCodes[i]
        //each sub pixel can hold up till 253, 254 means letter break
        if (code < 254) {
            charBytes.push(code)
        } else {
            let numOfTimes = Math.floor(code / 253)
            let reminder = code % 253
            //if the character isn't an ascii character, it splits the number into sections which will be added up later
            for (let i = 0; i < numOfTimes; i++) {
                charBytes.push(253)
            }
            charBytes.push(reminder)
        }
        //adds a character break
        charBytes.push(254)
        //this is just for the looks, an offset might make the image look better but doesn't change the text data
        //higher value means higher file size
        if (shift) charBytes.push(...new Array(shift).fill(0))
    }
    let subDivision = [charBytes[0]]
    //splits the previous array into 4 subdivisions which mean R G B A , the alpha MUST be 255 or the RGB values will be changed
    for (let i = 1; i < charBytes.length; i++) {
        if (i % 3 == 0) subDivision.push(255)
        subDivision.push(charBytes[i])
    }
    let width = Math.round(Math.sqrt(subDivision.length / 4) + 1)
    let height = width
    let imageData = new Uint8ClampedArray(width * height * 4).fill(0)
    //to make sure a subdivision was completed 
    subDivision.push(...new Array(3).fill(255))
    for (let i = 0; i < subDivision.length; i++) {
        imageData[i] = subDivision[i]
    }
    return new ImageData(imageData, width, height)
}

RGBA_Code.getTextFromImage = function (image) {
    let data = image.data
    let string = ""
    let charCode = 0
    //iterates through the imageData, when it finds a 254 it means the character ended and the number
    //can be converted back to a string
    //255 is ignored as it's not used 
    for (let i = 1; i < data.length; i++) {
        if (data[i] != 254 && data[i] != 255) charCode += data[i]
        if (data[i] == 254) {
            string += String.fromCharCode(charCode)
            charCode = 0
        }
    }
    return string
}

RGBA_Code.downloadImageFromData = function (image, fileName = "RGBA_Code") {
    var link = document.createElement('a');
    link.download = fileName + '.png';
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    let ctx = canvas.getContext("2d")
    ctx.putImageData(image, 0, 0)
    link.href = canvas.toDataURL("image/png", 1)
    link.click();
}

RGBA_Code.downloadImageFromCanvas = function (canvas, fileName = "RGBA_Code") {
    var link = document.createElement('a');
    link.download = fileName + '.png';
    canvas.style.imageRendering = "pixelated"
    link.href = canvas.toDataURL("image/png", 1)
    link.click();
}

RGBA_Code.drawOnCanvas = function (image, canvas) {
    let ctx = canvas.getContext("2d")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    ctx.putImageData(image, 0, 0)
    ctx.getImageData(0, 0, canvas.width, canvas.height) // refreshes the canvas
}