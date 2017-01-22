import React from 'react';
import pageStructure from '../../modules/pageStructure';
import Creator from '../../modules/posterCreator';

const { CreatorContainer } = Creator.containers;
const { PageBody, MainTextSection } = pageStructure.components;

class Generator extends React.Component {
    render() {
        return (
            <PageBody>
                <MainTextSection title={"Create Keep Calm Posters With Ease"}>
                    <p>Creating a Keep Calm And Carry On poster has never been this easy.</p>
                    <p>Use our creator to create and print, export or share "Keep Calm And Carry on posters"</p>
                </MainTextSection>
                <CreatorContainer/>
            </PageBody>
        );
    }
}

export default Generator;