import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('<Footer />', () => {
    it('should render the copyright notice', () => {
        const renderedComponent = shallow(
            <Footer />
        );

        expect(renderedComponent.contains(
            <div className="nav text-sm">
                Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </div>
        )).toEqual(true);
    });
});
