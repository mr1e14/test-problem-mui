import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Demo from "../Demo";

describe("Demo", () => {
  let tree;
  let component;
  let wrapper;
  beforeEach(() => {
    component = renderer.create(<Demo />);
    tree = component.toJSON();
    wrapper = mount(<Demo />);
  });
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
  it("has button with text", () => {
    expect(wrapper.find("Button").text()).toEqual("Demo");
  });
});
