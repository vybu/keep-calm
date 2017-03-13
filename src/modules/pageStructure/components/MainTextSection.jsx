import React from 'react';

const MainTextSection = ({ children }) => (
    <section className="MainTextSection">
        <div className="MainTextSection-innerWrap">
            {/*<h1 className="MainTextSection-title">{title}</h1>*/}
            {children}
        </div>
    </section>
);

MainTextSection.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default MainTextSection;