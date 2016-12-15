import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from '../index';

describe('<NotificationItem />', () => {
    it('should render div component', () => {
        const timestamp = new Date().toUTCString();
        const renderedComponent = shallow(
            <NotificationItem
                message="Test"
                timestamp={timestamp}
            />
        );

        expect(renderedComponent.find('li').length).toEqual(1);
    });
});
