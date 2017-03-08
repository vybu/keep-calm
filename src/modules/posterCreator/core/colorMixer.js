import tinyColor from 'tinycolor2';
import data from '../../../common/data';
import { pickRandom, pickWeighted } from './utils';

const colors = [...data.colors.defaultColors, ...data.colors.crayolaColors];


export function getRandomPair() {
    const INCLUDE_FALLBACK_BLACK_WHITE = 0.4;
    const [BG_COLOR_WHITE, BG_COLOR_BLACK] = [0.2, 0.05];

    const randColors = data.colors.getHex(pickRandom(colors, 10));
    const bgColor = pickWeighted([randColors[0], 'black', 'white'], [1 - (BG_COLOR_BLACK + BG_COLOR_WHITE), BG_COLOR_BLACK, BG_COLOR_WHITE]);
    const txtColor = tinyColor.mostReadable(
        bgColor,
        randColors.slice(1),
        { includeFallbackColors: pickWeighted([true, false], [INCLUDE_FALLBACK_BLACK_WHITE, 1 - INCLUDE_FALLBACK_BLACK_WHITE]) }
    ).toHexString();

    return [
        bgColor,
        txtColor
    ];
}