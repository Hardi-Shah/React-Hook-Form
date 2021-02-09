import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    test('Should render without errors', () => {
        //const wrapper = component.find('.headerComponent');
        const wrapper=findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    test('Should render a logo', () => {
        const logo=findByTestAtrr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});