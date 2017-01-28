import React from 'react';

const OptionButton = ({name, onClick}) => (
    <button className="ContentRetrieveExternal-optionButton" onClick={(ev) => {ev.stopPropagation(); onClick();}}>{name}</button>
);

OptionButton.propTypes = {
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default OptionButton;