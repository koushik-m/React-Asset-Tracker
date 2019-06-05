/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Input from '.';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Input component', () => {
  test('renders', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.exists()).toBe(true);
  });
});
