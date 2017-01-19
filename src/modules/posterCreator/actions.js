import * as constants from './constants';

export const setFormValue = (field, value) => ({type: constants.SET_FORM_VALUE, field, value});