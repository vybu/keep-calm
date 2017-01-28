import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getAll } from '../selectors';
import Form from '../components/form/index.jsx';
import posterCanvas from '../../posterCanvas';
import Noop from '../../../common/components/Noop.jsx';

const { PosterCanvasContainer } = posterCanvas.components;


function getMainPosterSizeParams() {
    const DEFAULT_HEIGHT = 570;
    const DEFAULT_WIDTH = DEFAULT_HEIGHT / 5 * 4;
    const w = window.innerWidth;

    if (w - w * 0.2 < DEFAULT_HEIGHT) {
        return [w - w * 0.35, w - w * 0.35 * DEFAULT_HEIGHT/DEFAULT_WIDTH];
    } else {
        return [DEFAULT_WIDTH, DEFAULT_HEIGHT];
    }

}

const CreatorContainer = (props) => {
    if (process.env.SERVER_RENDER) {
        return <Noop/>;
    }
    const [w, h] = getMainPosterSizeParams();

    return (
        <div className="CreatorContainer">
            <Form {...props}/>
            <PosterCanvasContainer {...props}
                                   fontFamily={props.loadedFonts.find(f => f === props.fontFamily) ? props.fontFamily : 'Verdana'}
                                   text={props.text}
                                   width={w}
                                   height={h}/>
        </div>
    );
};

export default connect(getAll, actions)(CreatorContainer);
