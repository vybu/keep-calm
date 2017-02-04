import React from 'react';
import GallerySelector from './IconGallerySelector.jsx';
import SliderSelector from './IconSliderSelector.jsx';


class IconSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGalleryOn: false
        };
    }

    render() {
        const onSelect = (iconText, fontFamily = null) => {
            this.props.setFormValue('iconText', iconText);
            if (fontFamily) this.props.setFormValue('iconFont', fontFamily);
        };

        return (
            <div className="IconPicker">
                { this.state.isGalleryOn ?
                    <GallerySelector onClose={() => this.setState({ isGalleryOn: false })} onSelect={onSelect}/> : null}
                <SliderSelector onMoreButtonClick={() => this.setState({ isGalleryOn: true })} onSelect={onSelect}/>
            </div>
        );
    }
}

IconSelector.propTypes = {
    setFormValue: React.PropTypes.func
};

export default IconSelector;