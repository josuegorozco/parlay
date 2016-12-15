import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import User from '../index';
import NavDropdown from '../../NavDropdown';

describe('<User />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <User />
        );

        expect(renderedComponent.find(NavDropdown).length).toEqual(1);
    });
});
