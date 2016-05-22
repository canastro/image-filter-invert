/**
 * @name transform
 * @param {object} imageData
 * @param {number} length
 */
export function transform(data, length) {
    for (let i = 0; i < length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
}
