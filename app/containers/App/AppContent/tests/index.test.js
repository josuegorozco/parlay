import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AppContent from '../index';

describe('<AppContent />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <AppContent />
        );

        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
