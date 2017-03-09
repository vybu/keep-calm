import React from 'react';
import { Link } from 'react-router';

const logo = 'data:image/png;base64,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';

const PageNav = () => (
    <nav className="PageNav">
        <div onClick={() => window.open('/generator', '_self')} className="PageNav-logo">
            <img src={logo} alt="" />
        </div>
    </nav>
);

export default PageNav;