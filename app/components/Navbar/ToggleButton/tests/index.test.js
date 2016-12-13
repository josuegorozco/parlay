import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from '../index';

describe('<ToggleButton />', () => {
    it('should render a <a> element', () => {
        const renderedComponent = shallow(
            <ToggleButton />
        );

        expect(renderedComponent.find('a').length).toEqual(1);
    });
});
