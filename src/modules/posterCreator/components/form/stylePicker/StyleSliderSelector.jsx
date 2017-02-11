import React from 'react';
import { Container, Item } from '../../../../../common/components/simpleSlider';
import { defaultColors } from '../../../../../common/data/colors';

const StyleSliderPicker = ({ onSelect, onMoreButtonClick }) => (
    <div className="CreatorForm-stylingSlidingSelector">
        <Container onMoreButtonClick={onMoreButtonClick}>
            {defaultColors.map(({ hex }, i) => (
                <Item onClick={() => onSelect(hex)} key={i} style={{ backgroundColor: hex, cursor: 'pointer' }}/>))}
        </Container>
    </div>
);

StyleSliderPicker.propTypes = {
    onSelect: React.PropTypes.func,
    onMoreButtonClick: React.PropTypes.func
};


export default StyleSliderPicker;   