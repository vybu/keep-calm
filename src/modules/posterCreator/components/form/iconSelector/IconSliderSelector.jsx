import React from 'react';
import { Container, Item } from '../../../../../common/components/simpleSlider';
import icons from '../../../../../common/data/icons';

const IconSliderSelector = ({ onSelect, onMoreButtonClick }) => (
    <Container onMoreButtonClick={onMoreButtonClick}>
        {icons.slice(0, 12).map(({ symbol, fontFamily }, i) => (
            <Item onClick={() => onSelect(symbol, fontFamily)} key={i}
                  style={{ cursor: 'pointer', fontFamily }}>{symbol}</Item>))}
    </Container>
);

IconSliderSelector.propTypes = {
    onSelect: React.PropTypes.func,
    onMoreButtonClick: React.PropTypes.func,
};


export default IconSliderSelector;