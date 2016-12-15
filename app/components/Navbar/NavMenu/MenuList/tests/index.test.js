import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import MenuList from '../index';

describe('<MenuList />', () => {
    it('should render ul component', () => {
        const renderedComponent = shallow(
            <MenuList />
        );

        expect(renderedComponent.find('ul').length).toEqual(1);
    });
});
