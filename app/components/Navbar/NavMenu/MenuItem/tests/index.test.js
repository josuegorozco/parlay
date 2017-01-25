import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import MenuItem from '../index';
import Icon from '../../../../Icon';

describe('<MenuItem />', () => {
    it('should render MenuItem with url', () => {
        const renderedComponent = shallow(
            <MenuItem url="/" />
        );

        expect(renderedComponent.find('li').length).toEqual(1);
        expect(renderedComponent.find(Link).length).toEqual(1);
        expect(renderedComponent.find(Link).prop('to')).toEqual('/');
    });

    it('should render MenuItem with label', () => {
        const renderedComponent = shallow(
            <MenuItem label="Test" url="/" />
        );

        expect(renderedComponent.find('span').length).toEqual(1);
        expect(renderedComponent.find('span').hasClass('nav-text')).toEqual(true);
        expect(renderedComponent.find('span').contains('Test')).toEqual(true);
    });

    it('should render MenuItem with label custom className', () => {
        const renderedComponent = shallow(
            <MenuItem label="Test" className="customClassName" url="/" />
        );

        expect(renderedComponent.find('span').length).toEqual(1);
        expect(renderedComponent.find('span').hasClass('customClassName')).toEqual(true);
    });

    it('should render MenuItem with icon', () => {
        const renderedComponent = shallow(
            <MenuItem icon="home" iconClassName="m-a" url="/" />
        );

        expect(renderedComponent.find(Icon).length).toEqual(1);
        expect(renderedComponent.find(Icon).prop('name')).toEqual('home');
        expect(renderedComponent.find(Icon).prop('className')).toEqual('m-a');
    });
});
