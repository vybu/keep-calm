import * as constants from './constants';

export const setFormValue = (field, value, index) => ({type: constants.SET_FORM_VALUE, field, value, index});
export const addLoadedFont = value => ({type: constants.ADD_LOADED_FONT, value});