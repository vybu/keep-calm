import React from 'react';
import { FacebookIcon, TwitterIcon, GoogleplusIcon, PinterestIcon } from './SocialIcons.jsx';

const PageFooter = () => (
    <footer className="PageFooter">
        <div className="PageFooter-about">
            <h4>About</h4>
            <p>We created this "Keep Calm And Carry On" poster generator, because existing solutions
            are either not working, too complicated or have no easy way to export / print / share created poster.
            Keepcalm.top aims to make fast and fun experience. If you have suggestion how to improve this site
            feel free to reach out by email or twitter.</p>
        </div>
        <div className="PageFooter-contact">
            <h4>Contact</h4>
            <div className="PageFooter-contactList">
                <a href="https://twitter.com/vytenisbutkevic" target="_blank">Twitter</a>
                <a href="mailto: vytenis.butkevicius@gmail.com">Email</a>
            </div>
        </div>

        <div className="PageFooter-socialMedia">
            <h4>Share</h4>
            <div className="PageFooter-socialMediaList">
                <FacebookIcon/>
                <TwitterIcon/>
                <GoogleplusIcon/>
                <PinterestIcon/>
            </div>
        </div>
    </footer>
);

export default PageFooter;