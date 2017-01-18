import React from 'react';
import TextInput from './TextInput.jsx';
import FontSelector from './FontSelector.jsx';
import TextEffectsSelector from './TextEffectsSelector.jsx';

const Form = () => (
    <div className="CreatorForm">
        <div className="CreatorForm-stylingControls">
            <div>ICON</div>
            <div>BG COLOR</div>
            <div>TEXT COLOR</div>
        </div>
        <TextInput value="KEEP"/>
        <TextInput value="CALM"/>
        <TextInput value="AND"/>
        <TextInput value="CARRY"/>
        <TextInput value="ON"/>
        <FontSelector/>
        <TextEffectsSelector/>
    </div>
);

export default Form;