import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ToggleNav from '../index';

describe('<ToggleNav />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <ToggleNav />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
