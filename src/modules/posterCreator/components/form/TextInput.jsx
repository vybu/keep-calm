import React from 'react';

const TextInput = ({value, setFormValue, index}) => (
    <input value={value} onChange={(ev) => setFormValue(ev.target.value, index)} className="TextInput">
    </input>
);

TextInput.propTypes = {
    value: React.PropTypes.string,
    index: React.PropTypes.number,
    setFormValue: React.PropTypes.func
};

export default TextInput;