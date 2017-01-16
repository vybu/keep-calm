import React from 'react';

const Submit = ({isEnabled, submit}) => (
    <div className={`AlphaCalculatorSubmit ${isEnabled ? '' : 'is-disabled'}`}>
        <button onClick={() => isEnabled && submit()} disabled={!isEnabled}>Get Calculations</button>
    </div>
);

Submit.propTypes = {
    isEnabled: React.PropTypes.bool,
    submit: React.PropTypes.func
};

export default Submit;