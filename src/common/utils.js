export const immutableArrayEdit = (array, newValue, index = null) => {
    const newArray = array.slice();
    if (index !== null) {
        newArray[index] = newValue;
    } else {
        newArray.push(newValue);
    }

    return newArray;
};