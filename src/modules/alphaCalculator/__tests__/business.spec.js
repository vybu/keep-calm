import { calculateAlpha, isValidAlphaCalculationParam } from '../business';

describe('AlphaCalculator business', () => {
    describe('#calculateAlpha', () => {

        const testCases = [
            { args: ['1', '2'], result: 2 },
            { args: ['1', 2], result: 2 },
            { args: [2, 2], result: 4 },
        ];

        testCases.forEach(({args, result}) => {
            it('multiplies 2 number values, which can be provided as type string or number', () => {
                expect(calculateAlpha(...args)).toEqual(result);
            });
        });

        it('throw error if provided value that is not a number', () => {
            expect(() => calculateAlpha('a', 1)).toThrow();
        });
    });
    
    describe('#isValidAlphaCalculationParam', () => {
        it('returns false if value is not a number (can be of type string or type number)', () => {
            expect(isValidAlphaCalculationParam('a')).toBeFalsy();
        });

        const successTestCases = [1, '1', 123456789, '123456789'];

        successTestCases.forEach(val => {
            it(`return true if value is number with length 1<= ${val} <=10`, () => {
                expect(isValidAlphaCalculationParam(val)).toBeTruthy();

            });
        });

        const failTestCases = ['', '012345678910', 12345678910];

        failTestCases.forEach(val => {
            it(`return false if value is number with length 1 > ${val} >10`, () => {
                expect(isValidAlphaCalculationParam(val)).toBeFalsy();

            });
        });
    });
});