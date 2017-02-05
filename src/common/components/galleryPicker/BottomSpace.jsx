import React from 'react';


class BottomSpace extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="GalleryPicker-bottomSpace">
                {this.props.children}
            </div>
        );
    }
}

BottomSpace.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
};

export default BottomSpace;