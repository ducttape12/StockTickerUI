import React from 'react';
import { shallow } from 'enzyme';
import SearchFilter from './';
import Form from 'react-bootstrap/Form';

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('<SearchFilter />', () => {
    it('renders without crashing', () => {
        shallow(<SearchFilter />);
    });

    it('fires an onchange event', async () => {
        let onChangeHandlerFired = false;
        const onChangeHandler = () => {
            onChangeHandlerFired = true;
        };

        const wrapper = shallow(<SearchFilter onChange={onChangeHandler} />);
        const searchFilterProps = wrapper.find(Form.Control).first().getElement().props;
        const searchFilterOnChange = searchFilterProps.onChange;

        searchFilterOnChange({target: {value: 'Some text'}});

        await sleep(400);

        expect(onChangeHandlerFired).toEqual(true);
    });
});