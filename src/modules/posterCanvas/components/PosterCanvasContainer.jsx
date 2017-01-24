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
                <ContentRetrieveOverlay />
            </div>
        );
    }
}

export default PosterCanvasContainer;