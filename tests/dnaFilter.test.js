const dnaFilter = require('../dna');

describe('DNA filter function test', () => {
    it('Should remove any non-canonical DNA bases.', () => {
        const dna = 'CTAbmnnbmnbmGGGTA';
        expect(dnaFilter(dna)).toEqual('CTAGGGTA');
    })

    it('Should get bases in uppercase when the base is lowercase.', () => {
        const dnaTestCases = ['CtAGGGTA', 'CTaGGGTA', 'CTAgGGTA', 'cTAGGGTA', 'ctagggta'];

        dnaTestCases.forEach(dna => {
            expect(dnaFilter(dna)).toBe('CTAGGGTA');
        });
    })

    it('Should get an empty string when dna is empty.', () => {
        const dna = '';
        expect(dnaFilter(dna)).toEqual('');
    })

    it('Should get a sanitize dna when dna has mixed bases.', () => {
        const dnaTestCases = ['CTrdfuAGGGTA', 'CTrdfuAGGGTA1234', 'CTrdfuagggTA1234'];

        dnaTestCases.forEach(dna => expect(dnaFilter(dna)).toEqual('CTAGGGTA'));
    })
});