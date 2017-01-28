import React from 'react';


class Item extends React.Component {
    constructor(){
        super();
    }

    render() {
        const style = {...this.props.style, ...{minHeight: `${this.props.size}px`, minWidth: `${this.props.size}px`}};
        return (
            <div onClick={this.props.onClick} style={style} className="SimpleSlider-item">
                {this.props.children}
            </div>
        );
    }
}

Item.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    onClick: React.PropTypes.func,
    style: React.PropTypes.object,
    size: React.PropTypes.number
};

export default Item;