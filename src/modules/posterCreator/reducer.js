import { SET_FORM_VALUE } from './constants';
import { immutableArrayEdit } from '../../common/utils';

const initialState = { // FLAT structure so it's easier to modify it immutably
    // form
    iconText: '§',
    iconFont: 'Keep Calm',
    backgroundColor: '#c10c06',
    textColor: '#ffffff',
    text: ['KEEP', 'CALM', 'AND', 'CARRY', 'ON'],
    fontFamily: 'Keep Calm',
};


export default function(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_VALUE:
            return {
                ...state, ...{ [action.field]: action.index !== undefined ? immutableArrayEdit(state[action.field], action.value, action.index) : action.value }
            };
        default:
            return state;
    }
}
