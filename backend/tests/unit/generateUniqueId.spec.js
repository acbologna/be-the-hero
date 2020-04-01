const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('Should generete an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLenght(8);
    }) 
});