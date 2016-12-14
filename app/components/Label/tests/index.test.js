import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Label from '../index';

describe('<Label />', () => {
    it('should render span component', () => {
        const renderedComponent = shallow(
            <Label />
        );

        expect(renderedComponent.find('span').length).toEqual(1);
    });
});
