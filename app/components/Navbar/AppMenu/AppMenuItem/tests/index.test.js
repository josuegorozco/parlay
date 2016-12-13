import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AppMenuItem from '../index';

describe('<AppMenuItem />', () => {
    it('should render an app menu item', () => {
        const props = {
            id: 1,
            label: 'Inbox',
            icon: 'envelope',
            className: 'b-r b-b',
        };

        const renderedComponent = shallow(
            <AppMenuItem {...props} />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
        expect(renderedComponent.find('div').hasClass('b-r b-b')).toEqual(true);
        expect(renderedComponent.find('div').contains('Inbox')).toEqual(true);
    });
});
