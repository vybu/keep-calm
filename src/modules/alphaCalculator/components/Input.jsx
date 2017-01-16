import React from 'react';

class Input extends React.Component {
    componentDidMount() {
        this.input.focus();
    }

    render() {
        const { value, onChange } = this.props;
        return (
            <input className="AlphaCalculatorInput"
                   placeholder="Enter a number"
                   ref={ref => this.input = ref}
                   type="text"
                   value={value}
                   onChange={(ev) => onChange(ev.target.value)}/>
        );
    }
}

Input.propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
};

export default Input;