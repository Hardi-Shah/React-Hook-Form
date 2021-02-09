import React from 'react';
import { shallow } from 'enzyme';
import HeadLine from './HeadLine';
import { findByTestAtrr, checkProps } from '../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<HeadLine {...props} />);
    return component;
};

describe('HeadLine Component', () => {

    // describe('Checking PropTypes', () => {

    //     it('Should not throw a warning', () => {

    //         const expectedProps = {
    //             header: 'Test Header',
    //             desc: 'Test Desc',
    //             tempArr: [{
    //                 fName: 'Test fName',
    //                 lName: 'Test lName',
    //                 email: 'test@email.com',
    //                 age: 23,
    //                 onlineStatus: false
    //             }]
    //         };
    //         const propsErr = checkProps(Headline, expectedProps)
    //         expect(propsErr).toBeUndefined();

    //     });

    // });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        test('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadLineComponent');
            expect(component.length).toBe(1);
        });

        test('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        test('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        test('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadLineComponent');
            expect(component.length).toBe(0);
        });


    });


});