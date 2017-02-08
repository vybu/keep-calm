import FontFaceObserver from 'fontfaceobserver';

function createLoadingScript(src) {
    const tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.href = src;
    return tag;
}


/**
 * Simply loads a font of a given name. There must be a css file with @font-face at url.
 * @param url {string|null}
 * @param fontName {string}
 * @param callback {function}
 */
export function loadFont(url = null, fontName, callback) {
    if (url) {
        const head = document.getElementsByTagName('head')[0];
        const linkTag = createLoadingScript(url);
        head.appendChild(linkTag);
    }

    const f = new FontFaceObserver(fontName);
    f.load().then(callback).catch((e) => {
        console.error('TODO, retry', e);
    });
}


