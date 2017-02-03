import { SHOW, HIDE, TYPE_NOT_VISIBLE} from './constants';

const initialState = {
    type: TYPE_NOT_VISIBLE,
    linkValue: null,
    widthDimension: 600,
    heightDimension: 700,
    actionOnClose: null,
    actionOnSelect: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return { ...state, ...{ type: action.modalType, linkValue: action.linkValue } };
        case HIDE:
            return { ...state, ...{ type: null } };
        case 'TODO:RESET':
        default:
            return state;
    }
}
