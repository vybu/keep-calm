import React from 'react';
import Form from './form/index.jsx';
import posterCanvas from '../../posterCanvas';

const { PosterCanvas } = posterCanvas.components;

const CreatorContainer = () => (
    <div className="CreatorContainer">
        <Form/>
        <PosterCanvas width={400} height={500}/>
    </div>
);

export default CreatorContainer;