import React from 'react';
import Main from './Main.jsx';


class ContentRetrieveOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    show() {
        this.setState({ isVisible: true });
    }

    hide() {
        this.setState({ isVisible: false });
    }

    toggle() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        return (
            <div onMouseEnter={this.show} onMouseLeave={this.hide} onClick={this.toggle} className="ContentRetrieveOverlay">
                {this.state.isVisible ? <Main {...this.props}/> : null}
            </div>
        );
    }
}

export default ContentRetrieveOverlay;
