import React from 'react';


class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const size = `${this.props.size}px`;
        return (
            <div style={{height: size}} className="SimpleSlider">
                <div className="SimpleSlider-scrollLeft"></div>
                <div style={{height: `${this.props.size + 18}px`}} className="SimpleSlider-container">
                    {React.Children.map(this.props.children, child => React.cloneElement(child, {size: this.props.size}))}
                </div>
                <div className="SimpleSlider-scrollRight"></div>
                {this.props.onMoreButtonClick ? <button style={{minWidth:size, maxWidth: size, minHeight: size, maxHeight: size}}
                                                        onClick={this.props.onMoreButtonClick}
                                                        className="SimpleSlider-moreButton">&#x22EF;</button> : null}
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
    onMoreButtonClick: React.PropTypes.func
};

Container.defaultProps = {
    size: 32,
    moreButton: false,
    onMoreButtonClick: null
};

export default Container;