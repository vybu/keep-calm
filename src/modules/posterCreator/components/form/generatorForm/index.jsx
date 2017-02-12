import React from 'react';
import { GENERATION_FUNNY } from '../../../constants';

class GeneratorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: null
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(ev) {
        this.setState({ type: ev.target.value });
    }

    render() {
        return (
            <div className="GeneratorForm">
                <div className="GeneratorForm-divider">
                    <div className="GeneratorForm-dividerLine" />
                    <div className="GeneratorForm-dividerText">Styles Generator</div>
                    <div className="GeneratorForm-dividerLine" />
                </div>

                <div className="GeneratorForm-controls">
                    <div className="GeneratorForm-option">
                        <input value="random" checked={this.state.type === 'random'} onChange={this.handleChange} name="type" type="radio" />
                        <label onClick={() => this.setState({ type: 'random' })} htmlFor="">Random</label>
                    </div>
                    <div className="GeneratorForm-option">
                        <input value="funny" checked={this.state.type === 'funny'} onChange={this.handleChange} name="type" type="radio" />
                        <label onClick={() => this.setState({ type: 'funny' })} htmlFor="">Funny / Cute</label>
                    </div>
                    <div className="GeneratorForm-option">
                        <input value="serious" checked={this.state.type === 'serious'} onChange={this.handleChange} name="type" type="radio" />
                        <label onClick={() => this.setState({ type: 'serious' })} htmlFor="">Serious / Sophisticated</label>
                    </div>
                    <button onClick={() => this.props.generateStyling(GENERATION_FUNNY)}>Generate</button>
                </div>
            </div>
        );
    }
}

GeneratorForm.propTypes = {
    generateStyling: React.PropTypes.func,
};

export default GeneratorForm;