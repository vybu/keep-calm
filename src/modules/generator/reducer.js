import * as constants from './constants';


const initialState = {
    configs: []
};


export default function(state = initialState, action) {
    if (constants.ADD_GENERATED_POSTERS) {
        return { configs: [...state.configs, action.configs] };
    }

    return state;
}