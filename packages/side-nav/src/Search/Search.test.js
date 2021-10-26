import React from "react";
import { mount, shallow } from "enzyme";
import Search from "./Search";

describe("side-nav/Search", () => {
  it("allows value to be changed only by onChange", () => {
    const wrapper = mount(<Search value="foo" />);
    const input = wrapper.find("input");

    expect(input.prop("value")).toEqual("foo");
    input.simulate("change", { target: { value: "bar" } });
    const inputAfter = wrapper.find("input");
    expect(inputAfter.prop("value")).toEqual("bar");

    wrapper.setProps({ value: "baz" });
    const inputReAfter = wrapper.find("input");
    expect(inputReAfter.prop("value")).toEqual("bar"); // Incoming props are ignored
  });

  it("renders a button to clear input", () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find("input");

    expect(wrapper.find("CloseLUI").parent()).toHaveLength(0);
    input.simulate("change", { target: { value: "bar" } });
    expect(wrapper.find("CloseLUI").parent()).toHaveLength(1);

    wrapper
      .find("CloseLUI")
      .parents()
      .first()
      .simulate("click");
    expect(input.prop("value")).toEqual("");
    expect(wrapper.find("CloseLUI").parent()).toHaveLength(0);
  });
});
