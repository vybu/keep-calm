
export const defaultColor = ['#c10c06', '#ffffff', '#000000', '#795548', '#2196f3', '#ffeb3b', '#00d084', '#ff6f00', '#fa28ff'];

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