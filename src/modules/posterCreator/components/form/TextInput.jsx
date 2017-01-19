import React from 'react';

const TextInput = ({value, setFormValue, field}) => (
    <input value={value} onChange={(ev) => setFormValue(field, ev.target.value)} className="TextInput">
    </input>
);

TextInput.propTypes = {
    value: React.PropTypes.string,
    field: React.PropTypes.string,
    setFormValue: React.PropTypes.func
};

export default TextInput;