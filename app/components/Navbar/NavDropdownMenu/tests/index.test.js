import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavDropdownMenu from '../index';

describe('<NavDropdownMenu />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <NavDropdownMenu />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
