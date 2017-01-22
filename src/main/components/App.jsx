import React from 'react';
import pageStructure from '../../modules/pageStructure';

const { PageNav, PageFooter } = pageStructure.components;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
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