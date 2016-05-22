import { expect } from 'chai';
import { transform } from '../src/invert';

describe('invert', () => {
    it('should apply transformation', () => {
        const data = [
            193,
            219,
            242,
            255,
            193,
            219,
            242,
            255
        ];

        const expectedData = [
            62,
            36,
            13,
            255,
            193,
            219,
            242,
            255
        ];

        transform(data, 4, 5);
        expect(data).to.deep.equal(expectedData);
    });
});
