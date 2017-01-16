import React from 'react';
import Input from './Input.jsx';
import Submit from './Submit.jsx';

const Form = ({alphaInputValue, isAlphaInputValueValid, requestAlphaCalculations, setAlphaValue}) => (
    <div className="AlphaCalculatorForm">
        <Input value={alphaInputValue} onChange={setAlphaValue} />
        <Submit isEnabled={isAlphaInputValueValid} submit={requestAlphaCalculations} />
    </div>
);

Form.propTypes = {
    alphaInputValue: React.PropTypes.string,
    isAlphaInputValueValid: React.PropTypes.bool,
    requestAlphaCalculations: React.PropTypes.func,
    setAlphaValue: React.PropTypes.func,
};

export default Form;