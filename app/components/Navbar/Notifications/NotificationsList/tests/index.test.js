import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationsList from '../index';

describe('<NotificationsList />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <NotificationsList />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
