import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../index';

describe('<MenuItem />', () => {
    it('should render component', () => {
        const renderedComponent = shallow(
            <MenuItem url="/" />
        );

        expect(renderedComponent.find('li').length).toEqual(1);
    });
});
