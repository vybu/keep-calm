import React from 'react';
import { availableFonts } from '../../../posterCanvas/services/fontLoader';

const FontSelector = ({ value, onSelect }) => (
    <select value={value} onChange={onSelect} style={{ fontFamily: value }} className="FontSelector">
        {availableFonts.map((f, i) => <option style={{ fontFamily: 'Muli, Helvetica' }} key={i}
                                                                  value={f}>{f}</option>)}
    </select>
);

FontSelector.propTypes = {
    value: React.PropTypes.string,
    onSelect: React.PropTypes.func
};


export default FontSelector;