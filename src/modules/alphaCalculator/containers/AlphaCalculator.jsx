import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getAll } from '../selectors';
import Overlay from '../components/Overlay.jsx';
import Form from '../components/Form.jsx';

export class AlphaCalculator extends React.Component {

    render() {
        // no props validation since it's container that takes all module state, actions
        /* eslint-disable react/prop-types */
        const { alphaValueCalculation, nullifyAlphaCalculation } = this.props;

        return (
            <div className="AlphaCalculator">
                <Form {...this.props} />
                {alphaValueCalculation === null ?
                    null :
                    <Overlay value={alphaValueCalculation} close={nullifyAlphaCalculation}/>}
            </div>
        );
    }
}

export default connect((getAll), actions)(AlphaCalculator);