const isValidNumber = val =>  {
    if (isNaN(parseFloat(val))) {
        throw Error(`${val} is Nan`);
    }

    return true;
};

export const calculateAlpha = (val1, val2) => isValidNumber(val1) && isValidNumber(val2) && parseFloat(val1) * parseFloat(val2);

export const isValidAlphaCalculationParam = value => {
    try {
        isValidNumber(value);
        return `${value}`.length >= 1 && `${value}`.length <= 10;
    } catch (e) {
        return false;
    }
};