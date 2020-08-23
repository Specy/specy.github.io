let SP_Code = {}
SP_Code.createImage = function (text, shift = 0, fill = 0) {
    let charCodes = []
    //convert all letters to number
    let max = 0
    for (let i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i))
        if (charCodes[i] > max) max = charCodes[i]
    }
    //adds a 1 bit offset, without it the image looks almost completely green
    let charBytes = [1]
    let ignoreWordSplit = false
    //if it contains only ASCII characters it doesn't need to create letter splits so it can store twice the amount of data
    if (max < 253) charBytes[0] = 3, ignoreWordSplit = true
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
        //adds a character break, doesn't add it if the text is only ascii
        if (!ignoreWordSplit) charBytes.push(254)
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
    let imageData = new Uint8ClampedArray(width * height * 4).fill(fill)
    //to make sure a subdivision was completed 
    subDivision.push(...new Array(3).fill(255))
    for (let i = 0; i < subDivision.length; i++) {
        imageData[i] = subDivision[i]
    }
    return new ImageData(imageData, width, height)
}

SP_Code.getTextFromImage = function (image) {
    let data = image.data
    let string = ""
    let charCode = 0
    //iterates through the imageData, when it finds a 254 it means the character ended and the number
    //can be converted back to a string
    //255 is ignored as it's not used 
    if (data[0] == 2) {
        //if it's inside another picture
        let canvas = document.createElement("canvas")
        canvas.width = image.width
        canvas.height = image.height
        let ctx = canvas.getContext("2d")
        ctx.putImageData(image, 0, 0)
        //1 is the x pos, 2 is the y pos, 4 is the width/height, the limitation is a width of 255px
        let width = data[4] + data[5] + data[6]
        data = ctx.getImageData(data[1], data[2], width, width).data
    }
    // if the type of data is only ascii, it doesn't need the letter breaks
    if (data[0] == 3) {
        for (let i = 1; i < data.length; i++) {
            if (data[i] != 255 && data[i] != 0) string += String.fromCharCode(data[i])
        }
        return string
    }
    for (let i = 1; i < data.length; i++) {
        if (data[i] != 254 && data[i] != 255) charCode += data[i]
        if (data[i] == 254) {
            string += String.fromCharCode(charCode)
            charCode = 0
        }
    }
    return string
}
//Downloads the image data to png
SP_Code.downloadImageFromData = function (image, fileName = "SP_Code") {
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    let ctx = canvas.getContext("2d")
    ctx.putImageData(image, 0, 0)
    SP_Code.downloadImageFromCanvas(canvas, fileName)
}
//Download the canvas to png
SP_Code.downloadImageFromCanvas = function (canvas, fileName = "SP_Code") {
    var link = document.createElement('a');
    link.style.display = 'none';
    link.download = fileName + '.png';
    canvas.style.imageRendering = "pixelated"
    link.href = canvas.toDataURL("image/png", 1)
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
}
//Utility tool, draws an image on a canvas
SP_Code.drawOnCanvas = function (image, canvas) {
    let ctx = canvas.getContext("2d")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    ctx.putImageData(image, 0, 0)
    ctx.getImageData(0, 0, canvas.width, canvas.height) // refreshes the canvas
}
//Draws the data on top of an already existing image
SP_Code.drawTextOnPicture = function (image, text = "", shift = 0, x = 10, y = 10) {
    let imageToDraw = SP_Code.createImage(text, shift, 255)
    let background = document.createElement("canvas")
    let backgroundCtx = background.getContext("2d")
    let foreground = document.createElement("canvas")
    SP_Code.drawOnCanvas(image, background)
    SP_Code.drawOnCanvas(imageToDraw, foreground)
    if (image.width - 10 < imageToDraw.width || image.height - 10 < imageToDraw.height) {
        throw new Error("The image to be drawn can't be bigger than the generated image")
    }
    if (imageToDraw.width > 765) {
        throw new Error("Text is too big! Lower the shift")
    }
    backgroundCtx.drawImage(foreground, x, y)
    let imageData = backgroundCtx.getImageData(0, 0, canvas.width, canvas.height)
    let data = imageData.data
    data[0] = 2
    data[1] = x
    data[2] = y
    data[3] = 255
    //if the value is below 0 or above 255, it will become 0 and 255 respectively 
    //so it's safe to just subtract it directly
    data[4] = imageToDraw.width
    data[5] = imageToDraw.width - 255
    data[6] = imageToDraw.width - 510
    data[7] = 255
    return new ImageData(data, imageData.width, imageData.height)
}