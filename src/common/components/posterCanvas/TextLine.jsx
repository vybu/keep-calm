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

    get widthLimit() {
        return this.props.maxWidth - (this.props.maxWidth * this.props.horizontalPaddingPercent / 100);
    }

    get width() {
        return this.refs.txt.getWidth();
    }

    ensureFitInWidth() {
        const width = this.width;
        const widthLimit = this.widthLimit;

        if (width > widthLimit) {
            const val = this.state.forcedFontSize !== null ? this.state.forcedFontSize - 2 : this.props.fontSize -2;
            this.setState({ forcedFontSize: val, offsetY: -((this.props.fontSize - val) / 2)});
        }
    }

    componentDidUpdate() {
        if (this.width > this.widthLimit) {
            this.ensureFitInWidth();
        } else if (this.state.offsetX !== this.width / 2) {
            this.setState({ offsetX: this.width / 2 });
        }
    }

    componentDidMount() {
        this.setState({ offsetX: this.width / 2});
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