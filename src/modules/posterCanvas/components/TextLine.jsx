import React from 'react';
import { Text } from 'react-konva';

class TextLine extends React.Component {
    constructor() {
        super();
        this.state = {
            offsetX: 0,
            offsetY: 0,
            forcedFontSize: null
        };
    }


    componentDidMount() {
        this.setState({ offsetX: this.width / 2 });
    }

    componentDidUpdate() { // FIXME this doesn't really ensure that it won't go into infinite loop
        const w = this.width;
        const wLimit = this.widthLimit;
        if (w > wLimit) {
            this.ensureFitInWidth(true);
        } else if (this.state.offsetX !== this.width / 2) {
            this.setState({ offsetX: this.width / 2 });
        } else if (this.state.forcedFontSize !== null && wLimit - w > (wLimit / 5)) {
            this.ensureFitInWidth(false);
        }
    }

    get widthLimit() {
        return this.props.maxWidth - (this.props.maxWidth * this.props.horizontalPaddingPercent / 100);
    }

    get width() {
        return this.refs.txt.getWidth();
    }

    ensureFitInWidth(isTooWide = true) {
        const MIN_FONT_SIZE = 8; // current solution to situation where it gets stuck in loop between increasing: decreasing

        if (isTooWide) {
            if (this.state.forcedFontSize !== null && this.state.forcedFontSize <= MIN_FONT_SIZE) return;

            const val = this.state.forcedFontSize !== null ? Math.max(MIN_FONT_SIZE, this.state.forcedFontSize - 2) : this.props.fontSize - 2;
            this.setState({ forcedFontSize: val, offsetY: -((this.props.fontSize - val) / 2) });
        } else {
            if (this.state.forcedFontSize + 2 > this.props.fontSize) {
                this.setState({ forcedFontSize: null, offsetY: 0 });
            } else {
                const v = this.state.forcedFontSize + 2;
                this.setState({ forcedFontSize: v, offsetY: -((this.props.fontSize - v) / 2) });
            }
        }
    }

    render() {
        const { x, y, text, color, fontFamily, fontSize } = this.props;

        return (
            <Text ref="txt"
                  align={'center'}
                  x={x}
                  y={y}
                  offsetX={this.state.offsetX}
                  offsetY={this.state.offsetY}
                  fill={color}
                  fontFamily={fontFamily}
                  fontSize={this.state.forcedFontSize || fontSize}
                  text={text.toUpperCase()}/>
        );
    }
}

TextLine.propTypes = {
    text: React.PropTypes.string,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    color: React.PropTypes.string,
    fontFamily: React.PropTypes.string,
    fontSize: React.PropTypes.number,
    maxWidth: React.PropTypes.number,
    horizontalPaddingPercent: React.PropTypes.number
};

TextLine.defaultProps = {
    text: '',
    x: 0,
    y: 0,
    color: 'white',
    fontFamily: 'Keep Calm',
    fontSize: 20,
    horizontalPaddingPercent: 5
};

export default TextLine;
