import React from 'react';

const FontSelector = ({ value }) => (
    <select style={{fontFamily: 'Keep Calm'}} className="FontSelector" value={value}>
        <option style={{fontFamily: 'Keep Calm'}} value="Keep Calm">Keep Calm</option>
    </select>
);

FontSelector.propTypes = {
    text: React.PropTypes.string
};


export default FontSelector;