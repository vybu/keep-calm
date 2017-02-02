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

export const loadFormStateFromJson = (formState) => {
    return dispatch => {
        Object.keys(formState).forEach(field => {
            const val = formState[field];
            dispatch(setFormValue(field, val));

            if (/font/.test(field)) { // FIXME font loading should be one solution at one place, how it's all over...
                services.fontLoader.loadFont(null, val, () => dispatch(addLoadedFont(val)));
            }
        });
    };
};