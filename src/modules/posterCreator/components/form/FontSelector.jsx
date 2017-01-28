import React from 'react';

const FontSelector = ({ value }) => (
    <select className="FontSelector" value={value}>
        <option value="Keep Calm">Keep Calm</option>
    </select>
);

FontSelector.propTypes = {
    text: React.PropTypes.string
};


export default FontSelector;