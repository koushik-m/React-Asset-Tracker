/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Label from './';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Label component', () => {
  test('renders', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper.exists()).toBe(true);
  });
});
