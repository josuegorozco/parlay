import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavDropdownToggle from '../index';

describe('<NavDropdownToggle />', () => {
    it('should render component', () => {
        const renderedComponent = shallow(
            <NavDropdownToggle />
        );

        expect(renderedComponent.find('a').length).toEqual(1);
    });
});
