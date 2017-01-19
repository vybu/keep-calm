import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PosterCanvas from '../../components/PosterCanvas.jsx';


function getImgUrlHoc(props, onGetImgUrl) {
    class Wrap extends React.Component {
        constructor(props) {
            super(props);
            this.getImgUrlCallback = this.getImgUrlCallback.bind(this);
        }

        componentDidMount() {
            setTimeout(() => onGetImgUrl(this._getImgurl()), 50); // cuz posterCanvas need to rerender to layout right
        }

        getImgUrlCallback(getImgUrl) {
            this._getImgurl = getImgUrl;
        }

        render() {
            return <PosterCanvas {...this.props} getImgUrl={this.getImgUrlCallback} />;
        }
    }

    return <Wrap {...props}/>;
}

function removeFromNodeAndCallCb(node, cb) {
    return (...args) => {
        cb(...args);
        setTimeout(() => unmountComponentAtNode(node), 1); // fixme seems that this throws error, see if there is better solution
    };
}

function getImgUrl(posterParams, onImgUrl) {
    const renderContainer = document.createElement('div');
    renderContainer.style.display = 'none';
    document.body.appendChild(renderContainer);
    render(getImgUrlHoc(posterParams, removeFromNodeAndCallCb(renderContainer, onImgUrl)), renderContainer);
}

export default getImgUrl;
