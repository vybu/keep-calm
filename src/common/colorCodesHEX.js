function getArrayOfLength(l = 100) {
    const a = [];
    while (l--) {
        a.push(l);
    }
    return a;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default getArrayOfLength(30).map(getRandomColor);