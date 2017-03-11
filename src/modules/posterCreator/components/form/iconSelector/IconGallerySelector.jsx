import React from 'react';
import { Container, Section, SectionItem, TopSpace } from '../../../../../common/components/galleryPicker';
import icons from '../../../../../common/data/icons.js';

class IconGallerySelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };

        this.onSearchInput = this.onSearchInput.bind(this);
        this.getFilteredData = this.getFilteredData.bind(this);
    }

    onSearchInput(ev) {
        this.setState({ search: ev.target.value });
    }
    
    getFilteredData() {
        const search = this.state.search;
        if (search) {
            return icons.filter(({name})=> name.includes(search));
        } else {
            return icons;
        }
    }

    render() {
        const { onSelect, onClose } = this.props;
        return (
            <Container title="Icon Gallery" onClose={onClose}>
                <TopSpace>
                    <input onChange={this.onSearchInput} placeholder="Search" type="text" />
                </TopSpace>
                <Section title={'Icons'}>
                    {this.getFilteredData().map(({ name, symbol, fontFamily }, i) => (
                        <SectionItem size={39} onClick={() => onSelect(symbol, fontFamily)} key={i}
                            style={{ cursor: 'pointer', fontFamily }}>{symbol}</SectionItem>))}
                </Section>
            </Container>
        );
    }
}



IconGallerySelector.propTypes = {
    onSelect: React.PropTypes.func,
    onClose: React.PropTypes.func,
};


export default IconGallerySelector;