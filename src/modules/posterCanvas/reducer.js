import { ADD_LOADED_FONT } from './constants';
import { immutableArrayEdit } from '../../common/utils';


const initialState = {
    loadedFonts: ['sans-serif'],
    placeholderFont: 'sans-serif',
};

export default function resourceDependencyReducer(state = initialState, action) {

    if (action.type === ADD_LOADED_FONT) {
        return {
            ...state, ...{ loadedFonts: immutableArrayEdit(state.loadedFonts, action.value) }
        };
    }

    return state;
}