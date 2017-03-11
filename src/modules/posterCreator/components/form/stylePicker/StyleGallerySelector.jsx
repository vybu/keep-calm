import React from 'react';
import { Container, Section, SectionItem, BottomSpace } from '../../../../../common/components/galleryPicker';
import data from '../../../../../common/data';

const { defaultColors, crayolaColors } = data.colors;

const sensitizeInput = (value) => value.length < 1 ? '#' : value;

const IconGallerySelector = ({ onSelect, onClose, value }) => {

    return (
        <Container title="Style Gallery" onClose={onClose}>
            <Section title={'Picker'}>
                {defaultColors.concat(crayolaColors).map(({ hex, name }, i) => (
                    <SectionItem size={39} onClick={() => onSelect(hex)} key={i}
                                 style={{ cursor: 'pointer', backgroundColor: hex }}/>))}
            </Section>
            <BottomSpace>
                <span>
                    <input value={value.toUpperCase()} onChange={(ev) => onSelect(sensitizeInput(ev.target.value))}
                           type="text"/>
                </span>
            </BottomSpace>
        </Container>
    );
};

IconGallerySelector.propTypes = {
    onSelect: React.PropTypes.func,
    onClose: React.PropTypes.func,
    value: React.PropTypes.string,
};


export default IconGallerySelector;