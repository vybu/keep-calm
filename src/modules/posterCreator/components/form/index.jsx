import React from 'react';
import StyleSelector from './stylePicker/index.jsx';
import IconSelector from './iconSelector/index.jsx';
import FormSection from './FormSection.jsx';
import ContentInput from './ContentInput.jsx';
import FontSelector from './FontSelector.jsx';




const Form = (props) => {
    return (
        <div className="CreatorForm">
            <FormSection title={'Icon'}>
                <IconSelector setFormValue={props.setFormValue}/>
            </FormSection>
            <FormSection title={'Text'}>
                <ContentInput {...props} />
            </FormSection>
            <FormSection title={'Font'}>
                <FontSelector value={props.fontFamily} onSelect={c => props.setFontFamily(c.target.value)}/>
            </FormSection>
            <FormSection title={'Background Color'}>
                <StyleSelector value={props.backgroundColor} onSelect={c => props.setFormValue('backgroundColor', c)}/>
            </FormSection>
            <FormSection title={'Text Color'}>
                <StyleSelector value={props.textColor} onSelect={c => props.setFormValue('textColor', c)}/>
            </FormSection>

        </div>
    );
};

export default Form;