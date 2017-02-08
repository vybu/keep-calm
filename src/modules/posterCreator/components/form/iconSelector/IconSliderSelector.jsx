import React from 'react';
import { Container, Item } from '../../../../../common/components/simpleSlider';
import { fontello, originalCrown } from '../../../../../common/data/icons';

const IconSliderSelector = ({ onSelect, onMoreButtonClick }) => (
    <Container onMoreButtonClick={onMoreButtonClick}>
        <Item onClick={() => onSelect(originalCrown.symbol, originalCrown.fontFamily)}
              style={{ cursor: 'pointer', fontFamily: originalCrown.fontFamily }}>{originalCrown.symbol}</Item>
        {fontello.symbols.slice(0, 8).map((text, i) => (
            <Item onClick={() => onSelect(text, fontello.fontFamily)} key={i}
                  style={{ cursor: 'pointer', fontFamily: fontello.fontFamily }}>{text}</Item>))}
    </Container>
);

IconSliderSelector.propTypes = {
    onSelect: React.PropTypes.func,
    onMoreButtonClick: React.PropTypes.func,
};


export default IconSliderSelector;