import React from 'react';
import { Container, Item } from '../../../../common/components/simpleSlider';
import colorCodes from '../../../../common/data/colors';

const FormStylingSection = (props) => (
    <div className="CreatorForm-stylingSection">
        <div className="CreatorForm-stylingSlidingSelector">
            <Container>
                {colorCodes.map((c, i) => (<Item key={i} style={{ backgroundColor: c, cursor: 'pointer' }}/>))}
            </Container>
        </div>
    </div>
);

FormStylingSection.propTypes = {

};


export default FormStylingSection;