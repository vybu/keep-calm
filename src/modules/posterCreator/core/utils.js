import shuffle from 'lodash/shuffle';
import weighted from 'weighted';

export function pickRandom(arr, num = 1) {
    const v = shuffle(arr);
    return num === 1 ? v[0] : v.slice(0 , num);
}


export function pickWeighted(arr, weights) {
    return weighted.select(arr, weights);
}
