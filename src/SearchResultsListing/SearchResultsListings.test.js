import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResultsListings from './';
import SearchResult from '../SearchResult';

describe('<SearchResultsListings />', () => {
    it('renders without crashing', () => {
        shallow(<SearchResultsListings results={[]} />);
    });

    it('displays nothing when no results are specified', () => {
        const wrapper = shallow(<SearchResultsListings results={[]} />);

        expect(wrapper.contains(<p><small>Displaying the first 30 results</small></p>)).toEqual(false);
    });

    it('displays search results when results are specified', () => {
        const wrapper = shallow(<SearchResultsListings results={[{ symbol: 'SMBL', name: 'Company Name', stockExchange: 'Stock Exchange' }]} />);
        
        expect(wrapper.contains(<small>Displaying the first 30 results</small>)).toEqual(true);
        expect(wrapper.containsMatchingElement(<SearchResult key='SMBL' symbol='SMBL' name='Company Name' stockExchange='Stock Exchange' />)).toEqual(true);
    });
});