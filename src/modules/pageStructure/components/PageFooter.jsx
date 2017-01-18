import React from 'react';
import { FacebookIcon, TwitterIcon, GoogleplusIcon, PinterestIcon } from './SocialIcons.jsx';

const PageFooter = () => (
    <footer className="PageFooter">
        <div className="PageFooter-about">
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, eam ad wisi laudem, at quo agam utroque periculis, per esse dicam at. Fuisset dissentias vis an. Dicam urbanitas eu usu. No ius nemore propriae. Quo diceret vivendum accusamus ex, ex quo justo admodum patrioque.</p>
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