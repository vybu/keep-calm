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
