import React from 'react';

const MainTextSection = ({title, children}) => (
    <section className="MainTextSection">
        <h1 className="MainTextSection-title">{title}</h1>
        {children}
    </section>
);

MainTextSection.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])};

export default MainTextSection;