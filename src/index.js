var utils = require('./utils');

/**
 * @name transform
 * @param {object} imageData
 */
function transform(imageData) {
    var data = imageData.data;
    for (var i = 0; i < data.length; i+= 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    };

    return imageData;
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

    canvas = utils.getCanvas(options.data.width, options.data.height);
    context = canvas.getContext('2d');

    options.data = utils.getPixels(canvas, context, options.data);

    result = transform(options.data);

    if (options.asDataURL) {
        return utils.convertToDataURL(canvas, context, result);
    }

    return result;
}
