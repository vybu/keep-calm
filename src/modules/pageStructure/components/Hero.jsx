import React from 'react';

const Hero = () => (
    <nav className="Hero">
        <div onClick={() => window.open('/generator', '_self')} className="Logo">
            <h1>KEEP CALM</h1>
        </div>
        <p>Creating a Keep Calm And Carry On poster has never been this easy. Use our creator to create and print, export or share
           "Keep Calm And Carry on" posters.</p>
    </nav >
);

export default Hero;