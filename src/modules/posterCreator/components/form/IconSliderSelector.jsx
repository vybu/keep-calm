import React from 'react';
import { Container, Item } from '../../../../common/components/simpleSlider';


const FontelloIcons = [
    ['₼', 'fontello'],
    ['⋉', 'fontello'],
    ['★', 'fontello'],
    ['☉', 'fontello'],
    ['♳', 'fontello'],
    ['♴', 'fontello'],
    ['♵', 'fontello'],
    ['❤', 'fontello'],
    ['➵', 'fontello'],
    ['➶', 'fontello'],
    ['➷', 'fontello'],
    ['➸', 'fontello'],
    ['⟾', 'fontello'],
];

const IconSliderSelector = ({ setFormValue }) => {
    const onSelect = (iconText, fontFamily = null) => {
        setFormValue('iconText', iconText);
        if (fontFamily) setFormValue('iconFont', fontFamily);
    };

    return (
        <div className="CreatorForm-stylingSlidingSelector">
            <Container>
                {FontelloIcons.map(([text, fontFamily], i) => (
                    <Item onClick={() => onSelect(text, fontFamily)} key={i} style={{ cursor: 'pointer', fontFamily }}>{text}</Item>))}
            </Container>
        </div>
    );
};

IconSliderSelector.propTypes = {
    setFormValue: React.PropTypes.func,
    iconText: React.PropTypes.string,
    fontFamily: React.PropTypes.string
};


export default IconSliderSelector;