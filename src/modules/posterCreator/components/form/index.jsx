import React from 'react';
import StyleSliderPicker from './StyleSliderPicker.jsx';
import FormSection from './FormSection.jsx';
import ContentInput from './ContentInput.jsx';
import FontSelector from './FontSelector.jsx';




const Form = (props) => {
    return (
        <div className="CreatorForm">
            <FormSection title={'Icon'}>
                <StyleSliderPicker/>
            </FormSection>
            <FormSection title={'Text'}>
                <ContentInput {...props} />
            </FormSection>
            <FormSection title={'Font'}>
                <FontSelector/>
            </FormSection>
            <FormSection title={'Background Color'}>
                <StyleSliderPicker onSelect={(c) => props.setFormValue('backgroundColor', c)}/>
            </FormSection>
            <FormSection title={'Text Color'}>
                <StyleSliderPicker onSelect={(c) => props.setFormValue('textColor', c)}/>
            </FormSection>

        </div>
    );
};

export default Form;