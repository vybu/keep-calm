import React from 'react';

const PageBody = props => (
    <main className="PageBody">
        <div className="PageBody-topSpace"></div>
            {props.children}
        <div className="PageBody-bottomSpace"></div>
    </main>
);

PageBody.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default PageBody;