import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavDropdown from '../index';

describe('<NavDropdown />', () => {
    it('should render a nav dropdown element', () => {
        const children = (<div>Test</div>);
        const renderedComponent = shallow(
            <NavDropdown>
                {children}
            </NavDropdown>
        );

        expect(renderedComponent.find('li').length).toEqual(1);
        expect(renderedComponent.find('li').hasClass('dropdown')).toEqual(true);
        expect(renderedComponent.find('li').contains('Test')).toEqual(true);
        expect(renderedComponent.contains(children)).toEqual(true);
    });

    it('should render a nav dropdown with custom class', () => {
        const children = (<div>Test</div>);
        const renderedComponent = shallow(
            <NavDropdown
                className="customClass"
            >
                {children}
            </NavDropdown>
        );

        expect(renderedComponent.find('li').length).toEqual(1);
        expect(renderedComponent.find('li').hasClass('customClass')).toEqual(true);
    });
});
