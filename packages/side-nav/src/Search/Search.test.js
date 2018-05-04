import React from "react";
import { mount } from "enzyme";
import Search from "./Search";

describe("side-nav/Search", () => {
  it("allows value to be changed only by onChange", () => {
    const wrapper = mount(<Search value="foo" />);
    const input = wrapper.find("input");

    expect(input.prop("value")).toEqual("foo");
    input.simulate("change", { target: { value: "bar" } });
    expect(input.prop("value")).toEqual("bar");

    wrapper.setProps({ value: "baz" });
    expect(input.prop("value")).toEqual("bar"); // Incoming props are ignored
  });
});
