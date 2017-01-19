import React from 'react';
import PosterCanvas from './PosterCanvas.jsx';
import ContentRetrieveOverlay from './contentRetrieveOverlay/index.jsx';


class PosterCanvasContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PosterCanvasContainer">
                <PosterCanvas {...this.props} />
                {this.props.showButtons ? <ContentRetrieveOverlay /> : null}
            </div>
        );
    }
}

PosterCanvasContainer.propTypes = {
    showButtons: React.PropTypes.bool
};

PosterCanvasContainer.defaultProps = {
    showButtons: true
};


export default PosterCanvasContainer;