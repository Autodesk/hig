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

  it("renders a button to clear input", () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find("input");

    expect(wrapper.find(".hig__side-nav__search__clear")).toHaveLength(0);
    input.simulate("change", { target: { value: "bar" } });
    expect(wrapper.find(".hig__side-nav__search__clear")).toHaveLength(1);

    wrapper.find(".hig__side-nav__search__clear").simulate("click");
    expect(input.prop("value")).toEqual("");
    expect(wrapper.find(".hig__side-nav__search__clear")).toHaveLength(0);
  });
});
