import { SET_FORM_VALUE } from './constants';

const initialState = {
    icon: 'default',
    backgroundColor: '#c10c06',
    textColor: '#ffffff',
    text: ['KEEP', 'CALM', 'AND', 'CARRY', 'ON'],
    font: 'Keep Calm',
    textEffects1: null,
};

const immutableArrayEdit = (array, index, newValue) => {
    const newArray = array.slice();
    newArray[index] = newValue;
    return newArray;
};


export default function(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_VALUE:
            return {
                ...state, ...{ [action.field]: action.index !== undefined ? immutableArrayEdit(state[action.field], action.index, action.value) : action.value }
            };
        default:
            return state;
    }
}