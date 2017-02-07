import React from 'react';
import { connect } from 'react-redux';
import { getAll } from '../selectors';
import * as actions  from '../actions';
import { Layer, Rect, Stage } from 'react-konva';
import TextLine from './TextLine.jsx';

function getSizesAndCoordinates(height) {

    const SIZE_TO_FONT_SIZE_RATIO = 0.81; // actual size of letter in px to size of font

    const CROWN_PART = 2.5;
    const BIG_TEXT_PART = 2;
    const SMALL_TEXT_PART = 1;

    const SPACES = 10;

    const onePartVal = Math.round(height / 14.5);
    const [crownFontSize, bigTextFontSize, smallTextFontSize]  = [CROWN_PART * onePartVal, BIG_TEXT_PART * onePartVal, SMALL_TEXT_PART * onePartVal];
    const oneSpaceVal = (height - (crownFontSize + (4 * bigTextFontSize) + smallTextFontSize)) / SPACES;

    return [
        { y: oneSpaceVal, fontSize: crownFontSize },
        { y: oneSpaceVal * 3 + crownFontSize, fontSize: bigTextFontSize },
        { y: oneSpaceVal * 5 + crownFontSize + bigTextFontSize, fontSize: bigTextFontSize },
        { y: oneSpaceVal * 6 + crownFontSize + bigTextFontSize * 2, fontSize: smallTextFontSize },
        { y: oneSpaceVal * 7 + crownFontSize + bigTextFontSize * 2 + smallTextFontSize + smallTextFontSize * (1 - SIZE_TO_FONT_SIZE_RATIO), fontSize: bigTextFontSize },
        { y: oneSpaceVal * 9 + crownFontSize + bigTextFontSize * 3 + smallTextFontSize + smallTextFontSize * (1 - SIZE_TO_FONT_SIZE_RATIO), fontSize: bigTextFontSize },
    ];
}


export class PosterCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getImgUrl(this.getImgUrl.bind(this));
    }

    getImgUrl() {
        return this.refs.PosterCanvas.toDataURL();
    }

    getFontFontFamilyToUse(fontFamily) {
        const { loadedFonts } = this.props;

        if (loadedFonts && !loadedFonts.includes(fontFamily)) {
            this.props.loadFont(fontFamily);
            return this.props.placeholderFont; // TODO could also return previous font, could also add a middleware so fonts are loaded faster
        }

        return fontFamily;
    }

    render() {
        const { backgroundColor, text, iconText, iconFont: iF, width, height, fontFamily: fF, textColor } = this.props;
        const fontFamily = this.getFontFontFamilyToUse(fF);
        const iconFont = this.getFontFontFamilyToUse(iF);

        const [t1, t2, t3, t4, t5, t6] = getSizesAndCoordinates(height);

        return (
            <div>
                <div style={{width: `${width}px`, height: `${height}px`}} className="PosterCanvas-overlay"></div>
                <Stage className="PosterCanvas" width={width} height={height}>
                    <Layer ref="PosterCanvas">
                        <Rect
                            width={width}
                            height={height}
                            fill={backgroundColor}
                        />
                        <TextLine color={textColor} maxWidth={width} text={iconText} fontFamily={iconFont} x={width / 2} y={t1.y} fontSize={t1.fontSize}/>
                        <TextLine color={textColor} fontFamily={fontFamily} maxWidth={width} text={text[0]} x={width / 2} y={t2.y} fontSize={t2.fontSize}/>
                        <TextLine color={textColor} fontFamily={fontFamily} maxWidth={width} text={text[1]} x={width / 2} y={t3.y} fontSize={t3.fontSize}/>
                        <TextLine color={textColor} fontFamily={fontFamily} maxWidth={width} text={text[2]} x={width / 2} y={t4.y} fontSize={t4.fontSize}/>
                        <TextLine color={textColor} fontFamily={fontFamily} maxWidth={width} text={text[3]} x={width / 2} y={t5.y} fontSize={t5.fontSize}/>
                        <TextLine color={textColor} fontFamily={fontFamily} maxWidth={width} text={text[4]} x={width / 2} y={t6.y} fontSize={t6.fontSize}/>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

PosterCanvas.propTypes = {
    iconText: React.PropTypes.string,
    iconFont: React.PropTypes.string,
    fontFamily: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    textColor: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    text: React.PropTypes.arrayOf(React.PropTypes.string),
    textEffects: React.PropTypes.arrayOf(React.PropTypes.string),
    getImgUrl: React.PropTypes.func
};

PosterCanvas.defaultProps = {
    iconText: '§',
    iconFont: 'Keep Calm',
    fontFamily: 'Keep Calm',
    backgroundColor: '#c10c06',
    textColor: '#ffffff',
    width: 600,
    height: 700,
    text: ['Keep', 'Calm', 'And', 'Carry', 'On'],
    textEffects: [],
    getImgUrl: () => {}
};

export default connect(getAll, actions)(PosterCanvas);
