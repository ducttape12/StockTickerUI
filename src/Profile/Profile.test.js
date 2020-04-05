import React from 'react';
import { shallow } from 'enzyme';
import Profile from './';
import StockTickerClient from '../StockTickerClient';

jest.mock('../StockTickerClient', () => {
    return {
        getProfile: async (symbol) => {
            return {
                companyName: 'Company Name',
                description: 'Company Description',
                exchange: 'Exchange',
                image: 'https://www.example.com/company.jpg',
                industry: 'Company Industry',
                price: 1.23,
                symbol: 'COMP',
                website: 'https://www.example.com'
            };
        }
    }
});

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

describe('<Profile />', () => {
    it('renders without crashing', () => {
        shallow(<Profile match={{ params: { id: 'AAPL' } }} />);
    });

    it('loads data from the endpoint for the specified ticker symbol', async () => {
        const wrapper = shallow(<Profile match={{ params: { id: 'AAPL' } }} />);
        await sleep(50)
        
        expect(wrapper.contains('Company Name')).toEqual(true);
        expect(wrapper.contains('Company Description')).toEqual(true);
        expect(wrapper.contains('Exchange')).toEqual(true);
        expect(wrapper.contains(<img src='https://www.example.com/company.jpg' alt='Company Name' className="img-thumbnail"></img>)).toEqual(true);
        expect(wrapper.contains('Company Industry')).toEqual(true);
        expect(wrapper.contains(<p className="h2">Price: 1.23</p>)).toEqual(true);
        expect(wrapper.contains('COMP')).toEqual(true);
        expect(wrapper.contains('https://www.example.com')).toEqual(true);
        expect(wrapper.contains('Please wait... Loading...')).toEqual(false);
    });
});