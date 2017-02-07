import * as constants from './constants';

export const setFormValue = (field, value, index) => ({ type: constants.SET_FORM_VALUE, field, value, index });

export const loadFormStateFromJson = (formState) => {
    return dispatch => {
        Object.keys(formState).forEach(field => {
            const val = formState[field];
            dispatch(setFormValue(field, val));
        });
    };
};