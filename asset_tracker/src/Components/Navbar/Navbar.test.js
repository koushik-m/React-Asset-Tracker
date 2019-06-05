/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Navbar from '.';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar component', () => {
  test('renders', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.exists()).toBe(true);
  });
});
