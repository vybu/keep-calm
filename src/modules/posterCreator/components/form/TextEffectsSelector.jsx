import React from 'react';

const TextEffects = ({value}) => (
    <div>
        <label htmlFor="text-effect">Text Effects</label>
        <select id="text-effects" value={value} className="TextInput">
            <option value="None">None</option>
            <option value="None">Text Shadow</option>
            <option value="None">Text Outline</option>
        </select>
    </div>
);

TextEffects.propTypes = {
    text: React.PropTypes.string
};


export default TextEffects;