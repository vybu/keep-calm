import React from 'react';
import pageStructure from '../../modules/pageStructure';
import overlayModal from '../../modules/overlayModal';

const { OverlayModal } = overlayModal.containers;
const { PageFooter, Hero } = pageStructure.components;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Hero>
                    <div onClick={() => window.open('/generator', '_self')} className="Logo">
                        <h1>KEEP CALM</h1>
                    </div>
                    <p>Creating a Keep Calm And Carry On poster has never been this easy. Use our creator to create and print, export or share "Keep Calm And Carry on" posters.</p>
                </Hero>
                <OverlayModal/>
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