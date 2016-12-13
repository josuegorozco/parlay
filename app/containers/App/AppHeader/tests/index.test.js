import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../index';

describe('<AppHeader />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <AppHeader />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
