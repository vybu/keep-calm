import getImgUrl from './lib/getImgUrl';

const defaultOptions = {
    width: 600,
    height: 700
};

export default function(options = defaultOptions, state) {
    getImgUrl({...state, ...options}, (imageSrc) => {
        const aTag = document.createElement('a');

        aTag.setAttribute('href', imageSrc);
        aTag.setAttribute('download', 'Poster-KeepCalm.top');
        aTag.style.display = 'none';

        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    });
}