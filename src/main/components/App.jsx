import React from 'react';
import posterCanvas from '../../modules/posterCanvas';
import pageStructure from '../../modules/pageStructure';

const { PosterCanvas } = posterCanvas.components;
const { PageNav, PageBody, PageFooter, MainTextSection } = pageStructure.components;

const App = () => (
    <div className="App">
        <PageNav />
        <PageBody>
            <MainTextSection title={"Create Keep Calm Posters With Ease"}>
                <p>Generating a Keep Calm And Carry On poster has never been this easy.</p>
                <p>Use our creator to create and print, export or share Keep Calm And Carry on posters</p>
            </MainTextSection>
        </PageBody>
        <PageFooter/>
    </div>
);

export default App;