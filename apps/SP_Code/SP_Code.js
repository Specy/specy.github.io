let SP_Code = {}
/**
 * Creates an image from text alone
 * @param {String} image The text to draw as image
 * @param {Number} shift The subpixels to shift the text, higher shift means bigger size but the image might look better 
 * @param {Number} fill The subpixel value to fill the remaining empty pixels
 * @return {ImageData} The image generated from the text
 */
SP_Code.createImage = function (text, shift = 0, fill = 0) {
    let encoder = new TextEncoder("utf-8")
    let length = encoder.encode(text).length
    let charBytes = [
        1, //type of image, 1 is only text, 2 is inside a picture
        //turning the length into 4 bytes
        length & 0xFF,
        (length >> 8) & 0xFF,
        (length >> 16) & 0xFF,
        (length >> 24) & 0xFF
    ]
    //convert all letters to number
    charBytes.push(...encoder.encode(text))
    if (shift) {
        let position = 6
        let shiftArray = new Array(shift).fill(0)
        let charBytesLength = charBytes.length
        for (let i = 0; i < charBytesLength; i += 2) {
            position += 2 + shift
            charBytes.splice(position, 0, ...shiftArray)
        }
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

/**
 * Downloads the imageData as .png
 * @param {ImageData} image The image to get the text from
 * @return {String} The text contained in the image
 */
SP_Code.getTextFromImage = function (image) {
    let data = image.data
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
    let length = (data[5] << 24) + (data[4] << 16) + (data[2] << 8) + data[1];
    let arrayToDecode = []
    for (let i = 6; i < data.length; i++) {
        if ((i + 1) % 4 != 0 && data[i] != 0) arrayToDecode.push(data[i])
    }
    arrayToDecode = arrayToDecode.splice(0, length)
    // arrayToDecode = arrayToDecode.splice(length, arrayToDecode.length)
    return new TextDecoder("utf-8").decode(Uint8ClampedArray.from(arrayToDecode))
}
/**
 * Downloads the imageData as .png
 * @param {ImageData} image The image to download
 * @param {String} fileName the name of the file, without the extension
 * @return {undefined} doesn't have a return 
 */
SP_Code.downloadImageFromData = function (image, fileName = "SP_Code") {
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    let ctx = canvas.getContext("2d")
    ctx.putImageData(image, 0, 0)
    SP_Code.downloadImageFromCanvas(canvas, fileName)
}
/**
 * Downloads the canvas as .png
 * @param {HTMLCanvasElement} canvas The canvas to download the image from
 * @param {String} fileName the name of the file, without the extension
 * @return {undefined} doesn't have a return 
 */
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
/**
 * Draws an image on a canvas 
 * @param {ImageData} image The image to draw to the canvas
 * @param {HTMLCanvasElement} canvas The canvas to draw to
 * @return {undefined} doesn't have a return 
 */
SP_Code.drawOnCanvas = function (image, canvas) {
    let ctx = canvas.getContext("2d")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    ctx.putImageData(image, 0, 0)
    ctx.getImageData(0, 0, canvas.width, canvas.height) // refreshes the canvas
}
/**
 * Draws the text on top of an already existing image.
 * @param {ImageData} image The image to draw on
 * @param {String} text The text to add to the image
 * @param {number} shift The amount of subpixels to shift the image, higher shift, higher the image size, 0 is the smallest
 * @param {number} x x position of where to draw the text in the image
 * @param {number} y y position of where to draw the text in the image
 * @return {ImageData} The original image with the text drawn on at x / y position
 */
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