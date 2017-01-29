import React from 'react';
import services from '../../services';

const FontSelector = ({ value, onSelect }) => (
    <select value={value} onChange={onSelect} style={{ fontFamily: value }} className="FontSelector">
        {services.fontLoader.availableFonts.map((f, i) => <option style={{fontFamily: 'Muli, Helvetica'}} key={i} value={f}>{f}</option>)}
    </select>
);

FontSelector.propTypes = {
    value: React.PropTypes.string,
    onSelect: React.PropTypes.func
};


export default FontSelector;