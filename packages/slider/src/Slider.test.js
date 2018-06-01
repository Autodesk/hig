import React from "react";
import { mount } from "enzyme";
import Slider from "./index";
import Input from "./presenters/Input";

describe("Slider", () => {
  it("allows value to be changed by onChange", () => {
    const wrapper = mount(<Slider value="10" />);
    const input = wrapper.find("input");

    expect(input.prop("value")).toEqual("10");
    input.simulate("change", { target: { value: "20" } });
    expect(input.prop("value")).toEqual("20");
  });

  it("ignores changes to the value prop", () => {
    const wrapper = mount(<Slider value="10" />);
    const input = wrapper.find("input");

    expect(input.prop("value")).toEqual("10");
    wrapper.setProps({ value: "20" });
    expect(input.prop("value")).toEqual("10");
  });

  describe("id", () => {
    it("generates an ID when one is not provided", () => {
      const wrapper = mount(<Slider />);
      expect(wrapper.find(Input).prop("id")).toEqual(
        expect.stringMatching("slider-")
      );
    });

    it("passes the ID prop to the underlying input", () => {
      const wrapper = mount(<Slider id="important-field" />);
      expect(wrapper.find(Input).prop("id")).toEqual("important-field");
    });
  });

  describe("event handlers", () => {
    it("calls onChange when provided", () => {
      const eventHandler = jest.fn();
      const wrapper = mount(<Slider onChange={eventHandler} />);
      wrapper.find("input").simulate("change", { target: { value: "10" } });

      expect(eventHandler).toHaveBeenCalled();
    });
  });

  it("renders a label when provided", () => {
    const label = "Age";
    const wrapper = mount(<Slider label={label} />);
    expect(wrapper.text()).toEqual(expect.stringMatching(label));
  });

  it("renders instructions when provided", () => {
    const instructions = "Select a number between 1 and 100.";
    const wrapper = mount(<Slider instructions={instructions} />);
    expect(wrapper.text()).toEqual(expect.stringMatching(instructions));
  });

  it("renders a required notice when provided", () => {
    const requiredMsg = "You must provide your age.";
    const wrapper = mount(<Slider required={requiredMsg} />);
    expect(wrapper.text()).toEqual(expect.stringMatching(requiredMsg));
  });
});
