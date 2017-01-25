import React from 'react';


class Section extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="GalleryPickerSection">
                {this.props.children}
            </div>
        );
    }
}

Section.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    title: React.PropTypes.string
};

export default Section;