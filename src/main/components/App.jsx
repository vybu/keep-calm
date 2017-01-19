import React from 'react';
import pageStructure from '../../modules/pageStructure';
import Creator from '../../modules/posterCreator';

const { CreatorContainer } = Creator.containers;
const { PageNav, PageBody, PageFooter, MainTextSection } = pageStructure.components;

const App = () => (
    <div className="App">
        <PageNav />
        <PageBody>
            <MainTextSection title={"Create Keep Calm Posters With Ease"}>
                <p>Generating a Keep Calm And Carry On poster has never been this easy.</p>
                <p>Use our creator to create and print, export or share Keep Calm And Carry on posters</p>
            </MainTextSection>
            <CreatorContainer/>
        </PageBody>
        <PageFooter/>
    </div>
);

export default App;