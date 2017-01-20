import getImgUrl from './lib/getImgUrl';

const defaultOptions = {
    width: 600,
    height: 700
};

function createImg(src) {
    const e = document.createElement('img');
    e.src = src;
    return e;
}

export default function(options = defaultOptions, state) {
    getImgUrl({...state, ...options}, (imageSrc) => {
        const win = window.open();
        win.document.body.appendChild(createImg(imageSrc));
        win.focus();
        win.print();
        win.close();
    });
}