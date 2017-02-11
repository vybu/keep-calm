import data from '../../../common/data';
import random from 'lodash/random';

const colors = [ ...data.colors.defaultColors, ...data.colors.crayolaColors ];
const fonts = data.fonts.availableFonts;
const fontelloIcons = data.icons.fontello;
const original = data.icons.originalCrown;


function pickRandom(arr) {
    return arr[random(0, arr.length - 1)];
}

function constructRandomConfig() {
    return {
        fontFamily: pickRandom(fonts),
        backgroundColor: pickRandom(colors).hex,
        textColor: pickRandom(colors).hex,
        iconText: pickRandom(fontelloIcons.symbols),
        iconFont: fontelloIcons.fontFamily
    };
}


export default function generator(currentPosterConfig, generationType) {
    return { currentPosterConfig, ...constructRandomConfig() };
}