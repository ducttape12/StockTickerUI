import React from 'react';
import { shallow } from 'enzyme';
import SearchFilter from './';

describe('<SearchFilter />', () => {
    it('renders without crashing', () => {
        shallow(<SearchFilter />);
    });
});