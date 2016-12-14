import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavDropdownDivider from '../index';

describe('<NavDropdownDivider />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <NavDropdownDivider />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
