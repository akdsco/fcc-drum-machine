import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";
import {findByTestAttr} from "./test/testUtils";

const setup = (props) => {
  return shallow(<App {...props} />)
};

test('renders App component without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');

  expect(component.length).toBe(1);
});