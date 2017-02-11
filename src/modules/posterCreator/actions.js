import * as constants from './constants';
import * as selectors from './selectors';
import generator from './core/generator';
import { batchActions } from 'redux-batched-actions';

export const setFormValue = (field, value, index) => ({ type: constants.SET_FORM_VALUE, field, value, index });

export const loadFormStateFromJson = (formState) => {
    return dispatch => {
        dispatch(batchActions(Object.keys(formState).map(field => setFormValue(field, formState[field]))));
    };
};

export const generateStyling = (generationType) => (dispatch, getState) => {
    const currentPosterConfig = selectors.getOnlyFormFields(selectors.getAll(getState()));
    const generatedConfig = generator(currentPosterConfig, generationType);
    dispatch(loadFormStateFromJson(generatedConfig));
};
