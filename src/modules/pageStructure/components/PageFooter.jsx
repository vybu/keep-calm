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
                <FacebookIcon href={'https://www.facebook.com/sharer/sharer.php?u=https%3A//keepcalm.top/'}/>
                <TwitterIcon href={'https://twitter.com/home?status=https%3A//keepcalm.top/'}/>
                <GoogleplusIcon href={'https://plus.google.com/share?url=https%3A//keepcalm.top/'}/>
                <PinterestIcon href={'https://pinterest.com/pin/create/button/?url=&media=https%3A//keepcalm.top/&description=Create%20awesome%20keep%20calm%20posters!'}/>
            </div>
        </div>
    </footer>
);

export default PageFooter;