import FontFaceObserver from 'fontfaceobserver';

export const availableFonts = [
    'Keep Calm',
    'Bungee Shade',
    'Creepster',
    'Chonburi',
    'Marck Script',
    'Cinzel Decorative',
    'Roboto Mono',
    'Monoton',
    'Faster One',
    'Bungee',
    'Cabin Sketch',
    'Amatic SC',
    'Montserrat Subrayada',
    'Rubik Mono One',
    'Aldrich',
    'Permanent Marker',
    'Megrim',
    'Londrina Shadow',
    'Audiowide',
    'Press Start 2P',
    'Fredericka the Great',
    'Syncopate',
    'Patrick Hand SC',
    'Monofett',
    'Fontdiner Swanky',
    'Nosifer',
    'Gloria Hallelujah',
];

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


