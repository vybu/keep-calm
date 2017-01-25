import React from 'react';
import TextInput from './TextInput.jsx';
import FontSelector from './FontSelector.jsx';
import ColorSelector from './ColorSelector.jsx';
import TextEffectsSelector from './TextEffectsSelector.jsx';

const Form = (props) => {
    const setTextFormValue = (...args) => props.setFormValue('text', ...args);
    return (
        <div className="CreatorForm">
            <div className="CreatorForm-stylingControls">
                <div className="Temporary">ICON</div>
                <div className="Temporary">BG COLOR</div>
                <div className="Temporary">TEXT COLOR</div>
            </div>
            <TextInput value={props.text[0]} index={0} setFormValue={setTextFormValue}/>
            <TextInput value={props.text[1]} index={1} setFormValue={setTextFormValue}/>
            <TextInput value={props.text[2]} index={2} setFormValue={setTextFormValue}/>
            <TextInput value={props.text[3]} index={3} setFormValue={setTextFormValue}/>
            <TextInput value={props.text[4]} index={4} setFormValue={setTextFormValue}/>
            <FontSelector/>
            <TextEffectsSelector/>
        </div>
    );
};

export default Form;