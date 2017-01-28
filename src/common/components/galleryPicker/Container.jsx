import './styles.scss';
import React from 'react';
import SectionTitle from './SectionTitle.jsx';


class Container extends React.Component {
    constructor(props){
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

    render() {

        const activeChild = this.getActiveChild();

        return (
            <div className="GalleryPicker">
                <div className="GalleryPicker-sectionsNavigation">
                    {React.Children.map(this.props.children, child => {
                        const title = child.props.title;
                        console.log({child});
                        return <SectionTitle onClick={this.selectSection} isActive={activeChild === child} value={title}/>;
                    })}
                </div>
                <div className="GalleryPicker-sections">
                    {activeChild}
                </div>
            </div>
        );
    }
}

Container.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default Container;