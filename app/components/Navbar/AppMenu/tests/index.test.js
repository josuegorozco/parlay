import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AppMenu from '../index';

const store = {
    menu: [{
        id: 1,
        label: 'Inbox',
        icon: 'envelope',
        className: 'b-r b-b',
    }],
};

describe('<AppMenu />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <AppMenu {...store} />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
