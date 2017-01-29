import { SET_FORM_VALUE, ADD_LOADED_FONT } from './constants';

const initialState = { // FLAT structure so it's easier to modify it immutably
    // form
    iconText: '§',
    iconFont: 'Keep Calm',
    backgroundColor: '#c10c06',
    textColor: '#ffffff',
    text: ['KEEP', 'CALM', 'AND', 'CARRY', 'ON'],
    fontFamily: 'Keep Calm',
    textEffects1: null,

    placeholderFont: 'sans-serif',
    loadedFonts: ['sans-serif']
};

const immutableArrayEdit = (array, newValue, index = null) => {
    const newArray = array.slice();
    if (index !== null) {
        newArray[index] = newValue;
    } else {
        newArray.push(newValue);
    }

    return newArray;
};


export default function(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_VALUE:
            return {
                ...state, ...{ [action.field]: action.index !== undefined ? immutableArrayEdit(state[action.field], action.value, action.index) : action.value }
            };
        case ADD_LOADED_FONT:
            return {
                ...state, ...{loadedFonts: immutableArrayEdit(state.loadedFonts, action.value)}
            };
        default:
            return state;
    }
}
