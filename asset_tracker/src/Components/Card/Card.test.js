import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Card from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Card component", () => {
    test("renders", () => {
        const wrapper = shallow(<Card />);
        
        expect(wrapper.exists()).toBe(true);
    });
});