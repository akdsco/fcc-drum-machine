import React from 'react';
import {shallow} from 'enzyme';
import ConsoleBtn from './ConsoleBtn';
import {checkProps, findByTestAttr} from "../test/testUtils";

const defaultProps = {
  pad: {
    name: 'q',
    url: 'src/music/bank_one/bass-Charlotte.wav'
  }
};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<ConsoleBtn {...setupProps} />)
};

test("does not throw a warning with expected props",() => {
  checkProps(ConsoleBtn, defaultProps);
});

test("renders button without errors",() => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-console-btn');
  expect(component.length).toBe(1);
});

test("renders button with uppercase name coming from prop", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-console-btn');
  expect(component.text()).toBe(defaultProps.pad.name.toUpperCase());
});