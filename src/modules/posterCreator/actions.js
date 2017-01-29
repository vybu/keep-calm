import * as constants from './constants';
import services from './services';

export const setFormValue = (field, value, index) => ({type: constants.SET_FORM_VALUE, field, value, index});
export const addLoadedFont = value => ({type: constants.ADD_LOADED_FONT, value});
export const setFontFamily = value => {
    return dispatch => {
        services.fontLoader.loadFont(null, value, () => dispatch(addLoadedFont(value)));
        dispatch(setFormValue('fontFamily', value));
    };
};