import data from '../../../common/data';
import { pickRandom } from './utils';
import { getRandomPair } from './colorMixer';
import * as C from '../constants';

const fonts = data.fonts.availableFonts;
const icons = data.icons.default;

function constructRandomConfig() {
    const [bgColor, txtColor] = getRandomPair();
    const icon = pickRandom(icons);

    return {
        fontFamily: pickRandom(fonts),
        backgroundColor: bgColor,
        textColor: txtColor,
        iconText: icon.symbol,
        iconFont: icon.fontFamily
    };
}


export default function generator(currentPosterConfig, generationType) {
    if (generationType === C.GENERATION_FUNNY) {
        return { currentPosterConfig, ...constructRandomConfig() };
    }
}

/*
    Possible implamentation:

    ## Premade templates
    * Generate many templates programmatically and chose best ones. Icons, fonts must have some names - rules.
    * Build some templates by hand and just use them.

    Icons can be assigned a group, or considered as neutral. Then generator could use weihgts for selection.
    Same goes for fonts.

    ... basically this must be "carried" by colors, if can't get it to work with colors, it won't work overall.

    ## Premade + auto-geberated
    * If premade templates are made from generated selection, reuse generation with premade.
*/