import React from 'react';


class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div onClick={this.handleClick} className="GalleryPicker-header">
                <div onClick={this.props.onClose} className="GalleryPicker-close">✕</div>
                <h3>{this.props.value}</h3>
            </div>
        );
    }
}

Header.propTypes = {
    value: React.PropTypes.string,
    onClose: React.PropTypes.func
};

Header.defaultProps = {
    onClose: () => {}
};

export default Header;