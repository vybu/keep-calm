import React from 'react';
import SectionTitle from './SectionTitle.jsx';

class SectionsNav extends React.Component {
    render() {
        return (
            <div className="GalleryPicker-sectionsNavigation">
                {React.Children.map(this.props.children, child => {
                    const title = child.props.title;
                    return <SectionTitle onClick={this.props.selectSection} isActive={this.props.activeChild === child} value={title}/>;
                })}
            </div>
        );
    }
}

SectionsNav.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    activeChild:  React.PropTypes.node,
    selectSection: React.PropTypes.func
};

export default SectionsNav;