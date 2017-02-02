import React from 'react';
import { connect } from 'react-redux';
import TransportAgent from '../../../common/transport';
import posterCanvas from '../../posterCanvas';
import posterCreator from '../../posterCreator';

const PosterCanvasComponent = posterCanvas.components.PosterCanvas;
const { handleFontMissMatch, getAll } = posterCreator.selectors;

class ImgRenderer extends React.Component {

    static makeAlt(data) {
        return `${data.text.join(' ')}. Text color: ${data.textColor}. Background color ${data.backgroundColor}`;
    }

    constructor(props) {
        super(props);

        this.state = {
            imageSrc: null,
            alt: null,
            hasLoadedData: false
        };

        this.getImgUrl = this.getImgUrl.bind(this);
    }

    componentWillMount() {
        TransportAgent.getDataById(this.props.posterId)
            .then(({ isSuccessfull = false, data }) => {
                if (isSuccessfull) {
                    this.props.loadFormStateFromJson(data);
                    this.setState({ imageSrc: data.imageSrc, hasLoadedData: true, alt: ImgRenderer.makeAlt(data.formConfig) });
                }
            });
    }

    isJpg() {
        return /\.jpg/.test(this.props.posterId);
    }

    getImgUrl(imageSrc) {
        this.setState({ imageSrc });
    }

    render() {
        if (this.state.imageSrc) {
            return <img src={this.state.imageSrc} alt={this.state.alt}/>;
        } else if (!this.state.hasLoadedData) {
            return null;
        } else if (this.isJpg()) {
            return <PosterCanvasComponent {...this.props} getImgUrl={this.getImgUrl}/>;
        }

        return <PosterCanvasComponent {...this.props}/>;
    }
}

ImgRenderer.propTypes = {
    posterId: React.PropTypes.string
};

export default connect(state => handleFontMissMatch(getAll(state)), posterCreator.actions)(ImgRenderer);