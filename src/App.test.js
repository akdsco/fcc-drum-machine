import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";
import {findByTestAttr} from "./test/testUtils";

const setup = (props) => {
  return shallow(<App {...props} />)
};

describe("renders component and it's children without errors", ()=> {
  test('renders App component without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
  });
  test("renders logo without errors", () =>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-logo');
    expect(component.length).toBe(1);
  });
});
