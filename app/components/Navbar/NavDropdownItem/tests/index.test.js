import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavDropdownItem from '../index';

describe('<NavDropdownItem />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <NavDropdownItem label="Test" />
        );

        expect(renderedComponent.contains('Test')).toEqual(true);
    });
});
