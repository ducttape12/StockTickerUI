import React from 'react';
import { shallow } from 'enzyme';
import Search from './';
import SearchFilter from '../SearchFilter';

describe('<Search />', () => {
    it('renders without crashing', () => {
        shallow(<Search />);
    });

    it('displays a search filter', () => {
        const wrapper = shallow(<Search />);
        
        expect(wrapper.containsMatchingElement(<SearchFilter />)).toEqual(true);
    });
});