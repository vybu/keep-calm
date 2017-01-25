import React from 'react';


class SectionItem extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="GalleryPickerSection-item">
                {this.props.children}
            </div>
        );
    }
}

SectionItem.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default SectionItem;