import React from 'react';
import pageStructure from '../../modules/pageStructure';
import Creator from '../../modules/posterCreator';

const { CreatorContainer } = Creator.containers;
const { PageBody } = pageStructure.components;

class Generator extends React.Component {
    render() {
        return (
            <PageBody>
                <CreatorContainer id={this.props.location.query.id} />
            </PageBody>
        );
    }
}

export default Generator;