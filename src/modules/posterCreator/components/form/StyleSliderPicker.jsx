import React from 'react';
import { Container, Item } from '../../../../common/components/simpleSlider';
import colorCodes from '../../../../common/colorCodesHEX';

const StyleSliderPicker = ({onSelect}) => (
    <div className="CreatorForm-stylingSlidingSelector">
        <Container>
            {colorCodes.map((c, i) => (<Item onClick={() => onSelect(c)} key={i} style={{ backgroundColor: c, cursor: 'pointer' }}/>))}
        </Container>
    </div>
);

StyleSliderPicker.propTypes = {
    onSelect: React.PropTypes.func
};


export default StyleSliderPicker;