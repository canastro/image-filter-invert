/**
 * @name getCanvas
 * @param {number} w - width
 * @param {number} h - height
 */
function getCanvas(w, h) {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;

    return canvas;
}

/**
 * @name getPixels
 * @param {object} canvas
 * @param {object} context
 * @param {object} imageData
 */
function getPixels(canvas, context, imageData) {
    context.putImageData(imageData, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}

/**
 * @name transform
 * @param {object} canvas
 * @param {object} context
 * @param {object} imageData
 */
function transform(canvas, context, imageData) {
    var data = imageData.data;
    for (var i = 0; i < data.length; i+= 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    };

    return imageData;
}

/**
 * @name convertToDataURL
 * @param {object} canvas
 * @param {object} context
 */
function convertToDataURL(canvas, context, imageData) {
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

/**
 * @name invert
 * @param {object} options
 * @param {string} options.data - data of a image extracted from a canvas
 * @param {bool} options.asDataURL
 */
module.exports = function invert(options) {
    var factor;
    var result;
    var canvas;
    var context;

    if (!options.data) {
        throw new Error('image-filter-invert:: invalid options provided');
    }

    canvas = getCanvas(options.data.width, options.data.height);
    context = canvas.getContext('2d');

    options.data = getPixels(canvas, context, options.data);

    result = transform(canvas, context, options.data);

    if (options.asDataURL) {
        return convertToDataURL(canvas, context, result);
    }

    return result;
}
