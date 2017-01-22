import React from 'react';
import pageStructure from '../../modules/pageStructure';

const { PageNav, PageFooter } = pageStructure.components;

const App = props => (
    <div className="App">
        <PageNav />
            {props.children}
        <PageFooter/>
    </div>
);

App.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default App;