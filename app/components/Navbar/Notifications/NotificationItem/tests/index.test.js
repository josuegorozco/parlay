import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from '../index';

describe('<NotificationItem />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <NotificationItem />
        );

        expect(renderedComponent.find('li').length).toEqual(1);
    });
});
