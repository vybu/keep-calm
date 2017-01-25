import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Container, Section, SectionItem } from '../src/common/components/galleryPicker';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getArrayOfLength(l = 100) {
    const a = [];
    while (l--) {
        a.push(l);
    }
    return a;
}

storiesOf('GalleryPicker', module)
    .add('Basic', () => {
        const items = getArrayOfLength(100);
        const items2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

        const styles = () => ({backgroundColor: getRandomColor(), display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px'});

        return (
            <Container>
                <Section title={'Colors'}>
                    {items.map(i => <SectionItem key={i}><div style={styles()}>{i}</div></SectionItem>)}
                </Section>
                <Section title={'Images'}>
                    {items2.map(i => <SectionItem key={i}><div style={styles()}>{i}</div></SectionItem>)}
                </Section>
            </Container>
        );
    });