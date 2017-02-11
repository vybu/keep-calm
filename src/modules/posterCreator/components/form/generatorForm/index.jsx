import React from 'react';
import { GENERATION_FUNNY } from '../../../constants';

class GeneratorForm extends React.Component {
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
                        <input name="type" type="radio" />
                        <label htmlFor="">Random</label>
                    </div>
                    <div className="GeneratorForm-option">   
                        <input name="type" type="radio" />
                        <label htmlFor="">Funny / Cute</label>
                    </div>
                    <div className="GeneratorForm-option">
                        <input name="type" type="radio" />
                        <label htmlFor="">Sophisticated / Corporate</label>
                    </div>
                    <button onClick={() => this.props.generateStyling(GENERATION_FUNNY)}>Surprise me!</button>
                </div>
            </div>
        );
    }
}

GeneratorForm.propTypes = {
    generateStyling: React.PropTypes.func,
};

export default GeneratorForm;