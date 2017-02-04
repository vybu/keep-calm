import React from 'react';


class SectionItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        const size = `${this.props.size}px`;
        const style = { ...this.props.style, ...{ minHeight: size, maxHeight: size, minWidth: size, maxWidth: size } };
        return (
            <div onClick={this.props.onClick} style={style} className="GalleryPickerSection-item">
                {this.props.children}
            </div>
        );
    }
}

SectionItem.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    onClick: React.PropTypes.func,
    style: React.PropTypes.object,
    size: React.PropTypes.number
};

export default SectionItem;