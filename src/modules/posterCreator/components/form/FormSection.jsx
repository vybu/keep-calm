import React from 'react';

const FormSection = ({children, title}) => (
    <section className="CreatorForm-section">
        <h4>{title}</h4>
        {children}
    </section>
);

FormSection.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    title: React.PropTypes.string
};


export default FormSection;