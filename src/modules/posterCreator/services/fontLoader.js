function createLoadingScript(src) {
    const tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.href = src;
    return tag;
}


/**
 * Simply loads a font of a given name. There must be a file server by server with that name
 * for this to work.
 * @param fontName
 * @param callback
 */
export default function(fontName, callback) {
    const head = document.getElementsByTagName('head')[0];
    const linkTag = createLoadingScript(`${fontName}.css`);
    linkTag.onload = setTimeout(callback, 800);
    head.appendChild(linkTag);
}
