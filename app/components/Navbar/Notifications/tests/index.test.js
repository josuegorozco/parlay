import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../index';
import NavDropdown from '../../NavDropdown';

const store = {
    notifications: [{
        id: 60798548,
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg',
        message: 'Officiis sapiente voluptatem porro.',
        timestamp: 'Wed Dec 14 2016 19:41:40 GMT-0800 (PST)',
    }],
};

describe('<Notifications />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <Notifications {...store} />
        );

        expect(renderedComponent.find(NavDropdown).length).toEqual(1);
    });
});
