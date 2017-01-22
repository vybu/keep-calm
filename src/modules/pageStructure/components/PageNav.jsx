import React from 'react';
import { Link } from 'react-router';

const PageNav = () => (
    <nav className="PageNav">
        <div className="PageNav-logo">
            <span className="PageNav-logoIcon">&#0167;</span> KeepCalm.top
        </div>
        <div className="PageNav-controls">
            <Link className="PageNav-controlsItem" to={'/generator'}>Generator</Link>
            <Link className="PageNav-controlsItem" to={'/history'}>History</Link>
        </div>
    </nav>
);

export default PageNav;