import React from 'react';
import GallerySelector from './StyleGallerySelector.jsx';
import SliderSelector from './StyleSliderSelector.jsx';


class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGalleryOn: false
        };
    }

    render() {
        return (
            <div className="StylePicker">
                { this.state.isGalleryOn ?
                    <GallerySelector value={this.props.value} onClose={() => this.setState({ isGalleryOn: false })} onSelect={this.props.onSelect}/> : null}
                <SliderSelector onMoreButtonClick={() => this.setState({ isGalleryOn: true })} onSelect={this.props.onSelect}/>
            </div>
        );
    }
}

ColorPicker.propTypes = {
    onSelect: React.PropTypes.func,
    value: React.PropTypes.string
};

export default ColorPicker;