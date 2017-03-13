import React from 'react';

const PageFooter = () => (
    <footer className="PageFooter">
        <div className="PageFooter-copyright">
            <p>Made with 💻 by <a href="https://twitter.com/vytenisbutkevic">Vytenis Butkevicius</a>, © 2017 {new Date().getFullYear() !== 2017 ? ` - ${new Date().getFullYear()}` : ''}</p>
        </div>
        <div className="PageFooter-socialIcons">
            <div className="Twitter">
                            <a href="https://twitter.com/share" className="twitter-share-button" data-show-count="false">Tweet</a>
            </div>
            <div className="Facebook">
                <div className="fb-share-button" data-href="https://keepcalm.top/generator" data-layout="button" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkeepcalm.top%2Fgenerator&amp;src=sdkpreparse">Share</a></div>
            </div>

        </div>
    </footer>
);

export default PageFooter;