import * as constants from './constants';

export const setAlphaValue = (value) => ({type: constants.SET_ALPHA_VALUE, value});

export const requestAlphaCalculations = () => ({type: constants.REQUEST_ALPHA_CALCULATIONS});

export const successAlphaCalculations = (value) => ({type: constants.SUCCESS_ALPHA_CALCULATIONS, value});

export const failAlphaCalculations = () => ({type: constants.FAIL_ALPHA_CALCULATIONS});

export const nullifyAlphaCalculation = () => ({type: constants.NULLIFY_ALPHA_CALCULATION});


