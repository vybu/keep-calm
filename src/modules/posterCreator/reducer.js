import { SET_FORM_VALUE } from './constants';

const initialState = {
    icon: 'default',
    backgroundColor: '#c10c06',
    textColor: '#ffffff',
    text1: 'KEEP',
    text2: 'CALM',
    text3: 'AND',
    text4: 'CARRY',
    text5: 'ON',
    font: 'Keep Calm',
    textEffects1: null,
};


export default function(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_VALUE:
            return {
                ...state, ...{ [action.field]: action.value }
            };
        default:
            return state;
    }
}