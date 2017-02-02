import { NAME } from './constants';

export const getAll = state => state[NAME];
export const getOnlyFormFields = ({ // used for getting data necessary to repaint poster
    iconText,
    iconFont,
    backgroundColor,
    textColor,
    text,
    fontFamily,
}) => ({
    iconText,
    iconFont,
    backgroundColor,
    textColor,
    text,
    fontFamily
});

// Basically for which is set can be not yet loaded, in this case we provide different font
// This is needed mostly because we re-render canvas after correct font loads
export const handleFontMissMatch = state => {
    const newState = { ...state };
    newState.fontFamily = state.loadedFonts.find(v => state.fontFamily === v) ? state.fontFamily : state.placeholderFont;
    newState.iconFont = state.loadedFonts.find(v => state.iconFont === v) ? state.iconFont : state.placeholderFont;
    return newState;
};
