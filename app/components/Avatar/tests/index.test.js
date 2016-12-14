import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../index';

describe('<Avatar />', () => {
    it('should render Avatar component', () => {
        const renderedComponent = shallow(
            <Avatar />
        );

        expect(renderedComponent.find('span').length).toEqual(1);
    });
});
