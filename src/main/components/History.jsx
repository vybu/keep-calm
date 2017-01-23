import React from 'react';
import pageStructure from '../../modules/pageStructure';

const { PageBody } = pageStructure.components;

class History extends React.Component {
    render() {
        return (
            <PageBody>
                <h1>Keep Calm And Carry On posters history</h1>
                <p>Originally Keep Calm And Carry On posters were produced by British government in the dawn of WW2 (1939) as a way to boost morale of British people, who were threatened by massive air attack on major cities. However not many of those posters were shown to public.</p>
                <p>In year 2000 a copy of original poster was discovered and since then these posters rose in popularity and became known worldwide. Thus followed commercialization and companies started putting Keep Calm And Cary On on all kinds of products with different phrases and icons</p>
                <p>Nowadays it is variations of these posters are used for everything. Usually top words "Keep Calm And" are kept in place, while lower part of the text, color, and icon are adjusted for the purpose.</p>
            </PageBody>
        );
    }
}

export default History;