import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getAll } from '../selectors';
import Form from '../components/form/index.jsx';
import posterCanvas from '../../posterCanvas';

const { PosterCanvasContainer } = posterCanvas.components;

function getMainPosterSizeParams() {
    const [DEFAULT_WIDTH, DEFAULT_HEIGHT] = [400, 500];
    const w = window.innerWidth;

    if (w - w * 0.2 < DEFAULT_HEIGHT) {
        return [w - w * 0.35, w - w * 0.35 * DEFAULT_HEIGHT/DEFAULT_WIDTH];
    } else {
        return [DEFAULT_WIDTH, DEFAULT_HEIGHT];
    }

}

const CreatorContainer = (props) => {
    const [w, h] = getMainPosterSizeParams();
    return (
        <div className="CreatorContainer">
            <Form {...props}/>
            <PosterCanvasContainer {...props}
                                   text={props.text}
                                   width={w} height={h}/>
        </div>
    );
};

export default connect(getAll, actions)(CreatorContainer);