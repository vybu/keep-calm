import * as constants from './constants';
import * as fontLoader from './services/fontLoader';

export const retrieveContent = (serviceType, options) => ({type: constants.RETRIEVE_CONTENT, serviceType, options});
export const addLoadedFont = value => ({ type: constants.ADD_LOADED_FONT, value });

export const loadFont = fontName => dispatch => {
    fontLoader.loadFont(null, fontName, () => dispatch(addLoadedFont(fontName)));
};