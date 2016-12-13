import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Brand from '../index';

describe('<Brand />', () => {
    it('should render the logo', () => {
        const renderedComponent = shallow(<Brand />);

        expect(renderedComponent.contains('Parlay')).toEqual(true);
    });
});
