import {
    SET_ALPHA_VALUE,
    REQUEST_ALPHA_CALCULATIONS,
    SUCCESS_ALPHA_CALCULATIONS,
    FAIL_ALPHA_CALCULATIONS,
    NULLIFY_ALPHA_CALCULATION
} from './constants';
import { isValidAlphaCalculationParam } from './business';

const initialState = {
    alphaInputValue: '',
    isAlphaInputValueValid: false,
    alphaValueCalculation: null,
    isFetching: false
};


export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ALPHA_VALUE:
            return {
                ...state, ...{
                    alphaInputValue: action.value,
                    isAlphaInputValueValid: isValidAlphaCalculationParam(action.value)
                }
            };
        case REQUEST_ALPHA_CALCULATIONS:
            return { ...state, ...{ isFetching: true } };
        case SUCCESS_ALPHA_CALCULATIONS:
            return { ...state, ...{ isFetching: false, alphaValueCalculation: action.value } };
        case FAIL_ALPHA_CALCULATIONS:
            return { ...state, ...{ isFetching: false } };
        case NULLIFY_ALPHA_CALCULATION:
            return { ...state, ...{ alphaValueCalculation: null } };
        default:
            return state;
    }
}