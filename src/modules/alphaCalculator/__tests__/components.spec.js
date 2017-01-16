import React from 'react';
import Components from '../components';

const { Overlay, Input, Submit, Form } = Components;

describe('AlphaCalculator components', () => {
    describe('Overlay', () => {
        it('should render', () => {
            const wrapper = shallow(<Overlay value={1} close={() => {}}/>);

            expect(wrapper).toMatchSnapshot();
        });

        it('should display given value', () => {
            const wrapper = shallow(<Overlay value={25} close={() => {}}/>);
            expect(wrapper.text()).toContain(25);
        });

        it('should invoke callback on button click', () => {
            const cb = jest.fn();
            const wrapper = shallow(<Overlay value={25} close={cb}/>);
            wrapper.find('button').simulate('click');
            expect(cb).toHaveBeenCalled();
        });
    });

    describe('Input', () => {
        it('should render', () => {
            const wrapper = shallow(<Input value={'1'} onChange={() => {}}/>);

            expect(wrapper).toMatchSnapshot();
        });

        it('should display given value', () => {
            const wrapper = shallow(<Input value={'25'} onChange={() => {}}/>);
            expect(wrapper.find('input').props().value).toContain('25');
        });

        it('should invoke callback on change', () => {
            const cb = jest.fn();
            const wrapper = shallow(<Input value={'25'} onChange={cb}/>);
            wrapper.find('input').simulate('change', {target: {value: '12345'}});
            expect(cb).toHaveBeenCalledWith('12345');
        });
    });

    describe('Submit', () => {
        it('should render with isEnabled true', () => {
            const wrapper = shallow(<Submit isEnabled submit={() => {}}/>);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render with isEnabled false', () => {
            const wrapper = shallow(<Submit isEnabled={false} submit={() => {}}/>);

            expect(wrapper).toMatchSnapshot();
        });

        it('should submit if is enabled', () => {
            const cb = jest.fn();
            const wrapper = shallow(<Submit isEnabled submit={cb}/>);

            wrapper.find('button').simulate('click');
            expect(cb).toHaveBeenCalled();
        });

        it('should not submit if is disabled', () => {
            const cb = jest.fn();
            const wrapper = shallow(<Submit isEnabled={false} submit={cb}/>);

            wrapper.find('button').simulate('click');
            expect(cb).toHaveBeenCalledTimes(0);
        });
    });

    describe('Form', () => {
        it('should render', () => {
            const wrapper = mount(<Form />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});