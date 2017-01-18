import React from 'react';

const PageBody = props => (
    <main className="PageBody">
        <div className="PageBody-topSpace"></div>
        {props.children}
        <div className="PageBody-bottomSpace"></div>
    </main>
);

export default PageBody;