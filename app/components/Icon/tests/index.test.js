import expect from 'expect';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { shallow } from 'enzyme';
import Icon from '../index';

describe('<Icon />', () => {
    it('should render material design component', () => {
        const renderedComponent = shallow(
            <Icon name="face" />
        );

        expect(renderedComponent.find('i').length).toEqual(1);
    });

    it('should render fontawesome component', () => {
        const renderedComponent = shallow(
            <Icon name="th" iconType="fontawesome" />
        );

        expect(renderedComponent.find(FontAwesome).length).toEqual(1);
    });
});
