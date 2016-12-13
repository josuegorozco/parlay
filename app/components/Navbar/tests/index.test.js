import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../index';

describe('<Navbar />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <Navbar />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });

    it('should render children elements', () => {
        const children = (<h1>Test</h1>);
        const renderedComponent = shallow(
            <Navbar>
                {children}
            </Navbar>
        );

        expect(renderedComponent.contains(children)).toEqual(true);
    });
});
