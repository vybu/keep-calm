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
                <p>Best in class!</p>
            </MainTextSection>
        </PageBody>
    </div>
);

export default App;