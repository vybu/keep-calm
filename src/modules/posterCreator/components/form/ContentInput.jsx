import React from 'react';
import TextInput from './TextInput.jsx';

const ContentInput = ({ text, setFormValue }) => {
    const setTextFormValue = (...args) => setFormValue('text', ...args);

    return (
        <div className="CreatorForm-textInputs">
            {text.map((t, i) => <TextInput value={t} index={i} key={i} setFormValue={setTextFormValue}/>)}
        </div>
    );
};

ContentInput.propTypes = {
    text: React.PropTypes.array,
    setFormValue: React.PropTypes.func
};

export default ContentInput;