import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getAll } from '../selectors';
import Form from '../components/form/index.jsx';
import posterCanvas from '../../posterCanvas';

const { PosterCanvasContainer } = posterCanvas.components;

const CreatorContainer = (props) => (
    <div className="CreatorContainer">
        <Form {...props}/>
        <PosterCanvasContainer {...props}
                      text={props.text}
                      width={400} height={500}/>
    </div>
);

export default connect(getAll, actions)(CreatorContainer);