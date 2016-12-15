import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from '../index';
import MenuList from '../MenuList';
import MenuItem from '../MenuItem';

const store = {
    menu: [{
        id: 1,
        label: 'Inbox',
        url: '/',
    }],
};

describe('<NavMenu />', () => {
    it('should render div component', () => {
        const renderedComponent = shallow(
            <NavMenu {...store} />
        );

        expect(renderedComponent.find(MenuList).length).toEqual(1);
        expect(renderedComponent.find(MenuItem).length).toEqual(1);
    });
});
