import reducer from '../reducer';
import * as actions from '../actions';

describe('AlphaCalculator reducer', () => {

    it('starts with correct initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            alphaInputValue: '',
            isAlphaInputValueValid: false,
            alphaValueCalculation: null,
            isFetching: false
        });
    });


    describe('should handle SET_ALPHA_VALUE', () => {
        const testCases = [
            ['', false], // [value, expected value of field isAlphaInputValueValid]
            ['1', true],
            ['0123456789', true],
            ['01234567891', false],
            ['a', false],
            ['abcdefghjk', false],
        ];

        testCases.forEach(([value, isAlphaInputValueValid]) => {
            it('should handle SET_ALPHA_VALUE', () => {

                expect(reducer(undefined, actions.setAlphaValue(value))).toEqual({
                    alphaInputValue: value,
                    isAlphaInputValueValid,
                    alphaValueCalculation: null,
                    isFetching: false
                });
            });

        });
    });


    it('should handle REQUEST_ALPHA_CALCULATIONS', () => {
        expect(reducer(undefined, actions.requestAlphaCalculations())).toEqual({
            alphaInputValue: '',
            isAlphaInputValueValid: false,
            alphaValueCalculation: null,
            isFetching: true
        });
    });

    it('should handle SUCCESS_ALPHA_CALCULATIONS', () => {
        expect(reducer({
            alphaInputValue: '1',
            isAlphaInputValueValid: true,
            alphaValueCalculation: null,
            isFetching: true
        }, actions.successAlphaCalculations(100))).toEqual({
            alphaInputValue: '1',
            isAlphaInputValueValid: true,
            alphaValueCalculation: 100,
            isFetching: false
        });
    });

    it('should handle FAIL_ALPHA_CALCULATIONS', () => {
        expect(reducer({
            alphaInputValue: '1',
            isAlphaInputValueValid: true,
            alphaValueCalculation: null,
            isFetching: true
        }, actions.failAlphaCalculations())).toEqual({
            alphaInputValue: '1',
            isAlphaInputValueValid: true,
            alphaValueCalculation: null,
            isFetching: false
        });
    });

    it('should handle NULLIFY_ALPHA_CALCULATION', () => {
        expect(reducer({
            alphaInputValue: '1',
            isAlphaInputValueValid: true,
            alphaValueCalculation: 100,
            isFetching: false
        }, actions.nullifyAlphaCalculation())).toEqual({
            alphaInputValue: '1',
            isAlphaInputValueValid: true,
            alphaValueCalculation: null,
            isFetching: false
        });
    });

});