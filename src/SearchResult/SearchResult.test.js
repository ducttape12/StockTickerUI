import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './';

describe('<SearchResult />', () => {
    it('renders without crashing', () => {
        shallow(<SearchResult />);
    });

    it('renders the data', () => {
        const wrapper = shallow(<SearchResult symbol='AAPL' name='Apple' stockExchange='NASDAQ' />);

        expect(wrapper.contains('AAPL')).toEqual(true);
        expect(wrapper.contains('Apple')).toEqual(true);
        expect(wrapper.contains('NASDAQ')).toEqual(true);
    });
});