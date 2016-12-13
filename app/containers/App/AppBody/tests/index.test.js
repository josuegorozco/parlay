import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AppBody from '../index';

describe('<AppBody />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <AppBody />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
