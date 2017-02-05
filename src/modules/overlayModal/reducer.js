import { SHOW, HIDE, TYPE_NOT_VISIBLE } from './constants';

const initialState = {
    type: TYPE_NOT_VISIBLE,
    linkValue: null, // for share
    serviceToCallOnSelect: null, // for download, print
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return {
                ...state, ...{
                    type: action.modalType,
                    linkValue: action.linkValue,
                    serviceToCallOnSelect: action.serviceToCallOnSelect
                }
            };
        case HIDE:
            return initialState;
        default:
            return state;
    }
}
