import React from 'react';

const PageBody = props => (
    <main className={`PageBody ${props.cls}`}>
        <div className="PageBody-content">
            {props.children}
        </div>
        <div className="PageBody-bottomSpace" />
    </main>
);

PageBody.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    cls: React.PropTypes.string
};

PageBody.defaultProps = {
    cls: ''
};

export default PageBody;