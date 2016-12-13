import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavItems from '../index';

describe('<NavItems />', () => {
    it('should render a ul element', () => {
        const children = (<li>Test</li>);

        const renderedComponent = shallow(
            <NavItems>
                {children}
            </NavItems>
        );

        expect(renderedComponent.find('ul').length).toEqual(1);
        expect(renderedComponent.find('ul').hasClass('nav')).toEqual(true);
        expect(renderedComponent.find('ul').hasClass('navbar-nav')).toEqual(true);
        expect(renderedComponent.find('li').contains('Test')).toEqual(true);
        expect(renderedComponent.contains(children)).toEqual(true);
    });
});
