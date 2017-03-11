import React from 'react';


class TopSpace extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="GalleryPicker-topSpace">
                {this.props.children}
            </div>
        );
    }
}

TopSpace.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
};

export default TopSpace;