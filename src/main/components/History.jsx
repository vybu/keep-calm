import React from 'react';
import pageStructure from '../../modules/pageStructure';

const { PageBody } = pageStructure.components;

class History extends React.Component {
    render() {
        return (
            <PageBody>
                <h1>Read here about keep calm history</h1>
                <p>bla bla bla bla bla so much interesting info !</p>
            </PageBody>
        );
    }
}

export default History;