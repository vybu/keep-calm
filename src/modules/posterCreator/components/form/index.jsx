import React from 'react';
import StyleSelector from './stylePicker/index.jsx';
import IconSelector from './iconSelector/index.jsx';
import FormSection from './FormSection.jsx';
import ContentInput from './ContentInput.jsx';
import FontSelector from './FontSelector.jsx';
import GeneratorForm from './generatorForm/index.jsx';




const Form = (props) => {
    return (
        <div className="CreatorForm">
            <FormSection title={'Text'}>
                <ContentInput {...props} />
            </FormSection>
            <FormSection title={'Font'}>
                <FontSelector value={props.fontFamily} onSelect={c => props.setFormValue('fontFamily', c.target.value)} />
            </FormSection>
            <FormSection title={'Icon'}>
                <IconSelector setFormValue={props.setFormValue} />
            </FormSection>
            <FormSection title={'Background Color'}>
                <StyleSelector value={props.backgroundColor} onSelect={c => props.setFormValue('backgroundColor', c)} />
            </FormSection>
            <FormSection title={'Text Color'}>
                <StyleSelector value={props.textColor} onSelect={c => props.setFormValue('textColor', c)} />
            </FormSection>
            <GeneratorForm generateStyling={props.generateStyling} />
        </div>
    );
};

export default Form;