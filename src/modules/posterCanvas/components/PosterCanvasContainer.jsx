import React from 'react';
import PosterCanvas from './PosterCanvas.jsx';
import ContentRetrieveOverlay from './contentRetrieveOverlay/index.jsx';
import ContentRetrieveExternal from './contentRetrieveExternal/index.jsx';


class PosterCanvasContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PosterCanvasContainer">
                <PosterCanvas {...this.props} height={this.props.height - 20} width={this.props.width - 16}/>
                {this.props.overlayButtons ? <ContentRetrieveOverlay/> : null}
                {this.props.externalButtons ? <ContentRetrieveExternal/> : null}
            </div>
        );
    }
}


PosterCanvasContainer.propTypes = {
    overlayButtons: React.PropTypes.bool,
    externalButtons: React.PropTypes.bool
};

PosterCanvasContainer.defaultProps = {
    overlayButtons: false,
    externalButtons: true
};

export default PosterCanvasContainer;
