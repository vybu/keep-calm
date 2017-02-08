import posterCreator from '../posterCreator';
import * as constants from './constants';
import generator from './core/generator';

export const generatePosters = (generationConfig) => (dispatch, getState) => {
    const currentPosterConfig = posterCreator.selectors.getOnlyFormFields(posterCreator.selectors.getAll(getState()));
    const generatedConfigs = generator(currentPosterConfig, generationConfig);

    dispatch({ type: constants.ADD_GENERATED_POSTERS, configs: generatedConfigs });
};