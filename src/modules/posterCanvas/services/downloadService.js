
export default function(imageSrc, name = 'KeepCalm.jpg') {
    const aTag = document.createElement('a');

    aTag.setAttribute('href', imageSrc);
    aTag.setAttribute('download', name);
    aTag.style.display = 'none';

    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
}