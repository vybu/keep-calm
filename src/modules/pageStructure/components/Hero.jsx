import React from 'react';

const Hero = () => (
    <nav className="Hero">
        <div onClick={() => window.open('/generator', '_self')} className="Logo">
            <h1>KEEP CALM</h1>
        </div>
        <div className="Hero-tagline">
            <p>Creating a <span>Keep Calm And Carry On</span> poster has never been this easy. Use our creator to create and print, export or share
         your awesome poster.</p>
            <div className="Hero-taglineBlur" />
        </div>
        <div className="Hero-bg">
            <div className="Hero-bgOne" />
            <div className="Hero-bgTwo" />
            <div className="Hero-bgThree" />
            <div className="Hero-bgFour" />
        </div>
    </nav >
);

export default Hero;