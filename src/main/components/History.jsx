import React from 'react';
import pageStructure from '../../modules/pageStructure';
const { PageBody } = pageStructure.components;

let originalImg;

if (process.env.SERVER_RENDER) {
    originalImg = require('../../vendor/lowQualityPoster');
} else {
    originalImg = require('../../vendor/highQualityPoster');

}

class History extends React.Component {
    render() {
        return (
            <PageBody cls={'History'}>
                <h1>Keep Calm And Carry On posters history</h1>
                <p>Originally Keep Calm And Carry On posters were produced by British government in the dawn of WW2
                    (1939) as a way to boost morale of British people, who were threatened by massive air attack on
                    major cities. However not many of those posters were shown to public.</p>
                <p>In year 2000 a copy of original poster was discovered and since then these posters rose in popularity
                    and became known worldwide. Thus followed commercialization and companies started putting Keep Calm
                    And Cary On on all kinds of products with different phrases and icons</p>
                <p>Nowadays it is variations of these posters are used for everything. Usually top words "Keep Calm And"
                    are kept in place, while lower part of the text, color, and icon are adjusted for the purpose.
                    read more on <a href="https://en.wikipedia.org/wiki/Keep_Calm_and_Carry_On" target="_blank">Wikipedia</a>
                </p>
                <div className="History-imageWrap">
                    <img
                        src={originalImg}
                        alt="Keep_Calm_And_Carry_On_-_Original_poster_-_Barter_Books_-_17-Oct-2011"/>
                    <div className="History-imageTitle"><span className="History-imageTitleSymbol">&#9830;</span>Original
                        Poster from 1939 - <a
                            href="https://en.wikipedia.org/wiki/File:Keep_Calm_And_Carry_On_-_Original_poster_-_Barter_Books_-_17-Oct-2011.jpg"
                            target="_blank">Wikipedia</a>
                    </div>
                </div>
            </PageBody>
        );
    }
}

export default History;