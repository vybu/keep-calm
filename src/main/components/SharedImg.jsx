import React from 'react';
import posterSharedView from '../../modules/posterSharedView';

const ImgRenderer = posterSharedView.components.ImgRenderer;

class ShareView extends React.Component {
    render() {
        return (
            <div className="ShareView">
                <ImgRenderer posterId={this.props.params.id}/>
            </div>
        );
    }
}

export default ShareView;