import React from 'react';

const Overlay = ({value, close}) => (
    <div className="AlphaCalculatorOverlay">
        <div className="AlphaCalculatorOverlay-content">
            <div className="AlphaCalculatorOverlay-text">Result: {value}</div>
            <div className="AlphaCalculatorOverlay-controls">
                <button className="AlphaCalculatorOverlay-button" onClick={close}>Enter new value</button>
            </div>
        </div>

    </div>
);

Overlay.propTypes = {
    value: React.PropTypes.number
};

export default Overlay;