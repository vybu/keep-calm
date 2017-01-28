import './styles.scss';
import React from 'react';


class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render() {

        return (
            <div style={{height: `${this.props.size}px`}} className="SimpleSlider">
                <div className="SimpleSlider-scrollLeft"></div>
                <div style={{height: `${this.props.size + 18}px`}} className="SimpleSlider-container">
                    {React.Children.map(this.props.children, child => React.cloneElement(child, {size: this.props.size}))}
                </div>
                <div className="SimpleSlider-scrollRight"></div>
                <button style={{minWidth: `${this.props.size}px`}} className="SimpleSlider-moreButton">&#x22EF;</button>
            </div>
        );
    }
}

Container.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    size: React.PropTypes.number,
    moreButton: React.PropTypes.bool
};

Container.defaultProps = {
    size: 32,
    moreButton: false
};

export default Container;