import React from 'react';
import pageStructure from '../../modules/pageStructure';
import overlayModal from '../../modules/overlayModal';

const { OverlayModal } = overlayModal.containers;
const { PageNav, PageFooter } = pageStructure.components;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <OverlayModal/>
                <PageNav />
                    {this.props.children}
                <PageFooter/>
            </div>
        );
    }
}


App.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default App;