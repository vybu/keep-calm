import React from 'react';


class SectionTitle extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.props.onClick(this.props.value);
    }

    render() {
        return (
            <div onClick={this.handleClick} className={`GalleryPicker-navigationItem ${this.props.isActive ? 'is-active' : ''}`}>
                {this.props.value}
            </div>
        );
    }
}

SectionTitle.propTypes = {
    value: React.PropTypes.string,
    isActive: React.PropTypes.bool
};

export default SectionTitle;