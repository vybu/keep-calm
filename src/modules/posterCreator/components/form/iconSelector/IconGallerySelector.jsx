import React from 'react';
import { Container, Section, SectionItem } from '../../../../../common/components/galleryPicker';
import { fontello, originalCrown } from './icons';

const IconGallerySelector = ({ onSelect, onClose }) => {

    return (
        <Container title="Icon Gallery" onClose={onClose}>
            <Section title={'Icons'}>
                <SectionItem size={39} onClick={() => onSelect(originalCrown.symbol, originalCrown.fontFamily)}
                             style={{ cursor: 'pointer', fontFamily: originalCrown.fontFamily }}>{originalCrown.symbol}</SectionItem>
                {fontello.symbols.slice(9).map((text, i) => (
                    <SectionItem size={39} onClick={() => onSelect(text, fontello.fontFamily)} key={i}
                                 style={{ cursor: 'pointer', fontFamily: fontello.fontFamily }}>{text}</SectionItem>))}
            </Section>
        </Container>
    );
};

IconGallerySelector.propTypes = {
    onSelect: React.PropTypes.func,
    onClose: React.PropTypes.func,
};


export default IconGallerySelector;