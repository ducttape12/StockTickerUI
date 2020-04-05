import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './';

describe('<Navigation />', () => {
    it('renders without crashing', () => {
        shallow(<Navigation />);
    });

    it('renders the brand name when specified', () => {
        const wrapper = shallow(<Navigation brand='Some Brand' />);

        expect(wrapper.contains('Some Brand')).toEqual(true);
    });
});