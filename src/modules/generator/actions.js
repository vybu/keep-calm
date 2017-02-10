import posterCreator from '../posterCreator';
import * as constants from './constants';
import generator from './core/generator';

export const generatePosters = (generationConfig) => (dispatch, getState) => {
    const currentPosterConfig = posterCreator.selectors.getOnlyFormFields(posterCreator.selectors.getAll(getState()));
    const generatedConfigs = generator(currentPosterConfig, generationConfig);

    dispatch({ type: constants.ADD_GENERATED_POSTERS, configs: generatedConfigs });
};



/*

* Resources:

- Color manipulations and assertions: https://github.com/bgrins/TinyColor, https://github.com/Qix-/color, https://github.com/brehaut/color-js, https://github.com/gka/chroma.js
- Get image color palette: https://github.com/lokesh/color-thief/

* Rules:

- Text and background provided minimum contrast. Or maybe mostly favor black / white text?



* Possible user flows:

** Initialization
- We automatically generate posters and just show them in area below;
- User has to click button to generate poster;
** Generation
- For each mood group we generate N banners and just show all groups
- We simply show premade templates shuffle them for different users.

TODO:
1. Isskirti pagrindines "mood" kategorijas. (sad, funny, exciting, luxurious | serious | authoritative)
2. Sukategorizuoti icon images.
3. Sukategorizuoti spalvas arba padaryt spalvu dali visiskai automatine: reiktu spalvu vertinimo libo, spalvu generavimo logikos.
4. Sukategorizuoti fontus.
5. Pabandyti viska sujungti ir paziureti ar kategorizacija islieka
6. Padaryti kazkokia vertinimo sistema ir duoti zmonems pavertinti, taip suzinant ar veikia
*
* */