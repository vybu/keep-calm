import React from 'react';

const TextInput = ({value}) => (
    <input value={value} className="TextInput">

    </input>
);

TextInput.propTypes = {
    text: React.PropTypes.string
};

export default TextInput;