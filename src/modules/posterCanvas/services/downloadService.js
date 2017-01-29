import getImgUrl from './lib/getImgUrl';
import posterCreator from '../../posterCreator';

const defaultOptions = {
    width: 600,
    height: 700
};

export default function(options = defaultOptions, state) {

    getImgUrl({...posterCreator.selectors.getAll(state), ...options}, (imageSrc) => {
        const aTag = document.createElement('a');

        aTag.setAttribute('href', imageSrc);
        aTag.setAttribute('download', 'Poster-KeepCalm-top.png');
        aTag.style.display = 'none';

        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    });
}
