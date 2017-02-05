import React from 'react';
import SectionsNav from './SectionsNav.jsx';
import Header from './Header.jsx';
import BottomSpace from './BottomSpace.jsx';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: null
        };
        this.selectSection = this.selectSection.bind(this);
    }

    selectSection(activeSection) {
        this.setState({ activeSection });
    }

    getActiveChild() {
        const activeCompName = this.state.activeSection;
        let activeChild;

        React.Children.forEach(this.props.children, (child, i) => {
            if (activeCompName === child.props.title) {
                activeChild = child;
            } else if (activeCompName === null && i === 0) {
                activeChild = child;
            }
        });

        return activeChild;
    }

    getBottomSpace() {
        let bottomSpace = null;
        React.Children.forEach(this.props.children, child => {
            if (child.type === BottomSpace) {
                bottomSpace = child;
            }
        });

        return bottomSpace;
    }

    render() {
        const bottomSpace = this.getBottomSpace();
        const activeChild = this.getActiveChild();

        return (
            <div className="GalleryPicker">
                <Header value={this.props.title} onClose={this.props.onClose}/>
                <div className="GalleryPicker-body">
                    {this.props.showNav ? <SectionsNav children={this.props.children} selectSection={this.selectSection}
                                                       activeChild={activeChild}/> : null}
                    <div className="GalleryPicker-sections">
                        {activeChild}
                    </div>
                </div>
                {bottomSpace}
            </div>
        );
    }
}

Container.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    onClose: React.PropTypes.func,
    title: React.PropTypes.string,
    showNav: React.PropTypes.bool
};

export default Container;