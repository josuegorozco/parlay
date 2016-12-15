import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../index';

describe('<Icon />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <Icon />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
