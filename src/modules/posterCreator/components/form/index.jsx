import React from 'react';
import TextInput from './TextInput.jsx';
import FontSelector from './FontSelector.jsx';
import TextEffectsSelector from './TextEffectsSelector.jsx';

const Form = (props) => (
    <div className="CreatorForm">
        <div className="CreatorForm-stylingControls">
            <div>ICON</div>
            <div>BG COLOR</div>
            <div>TEXT COLOR</div>
        </div>
        <TextInput value={props.text1} field="text1" setFormValue={props.setFormValue}/>
        <TextInput value={props.text2} field="text2" setFormValue={props.setFormValue}/>
        <TextInput value={props.text3} field="text3" setFormValue={props.setFormValue}/>
        <TextInput value={props.text4} field="text4" setFormValue={props.setFormValue}/>
        <TextInput value={props.text5} field="text5" setFormValue={props.setFormValue}/>
        <FontSelector/>
        <TextEffectsSelector/>
    </div>
);

export default Form;