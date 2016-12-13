import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from '../index';

describe('<AppFooter />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <AppFooter />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
