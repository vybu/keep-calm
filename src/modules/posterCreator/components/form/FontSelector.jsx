import React from 'react';

const FontSelector = ({value}) => (
    <div>
        <label htmlFor="">Font</label>
        <select value={value} className="TextInput">
            <option value="Keep Calm">Keep Calm</option>
        </select>
    </div>);

FontSelector.propTypes = {
    text: React.PropTypes.string
};


export default FontSelector;