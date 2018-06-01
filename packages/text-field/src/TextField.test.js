import React from "react";
import { mount } from "enzyme";
import TextField from "./index";
import Input from "./presenters/Input";

describe("TextField", () => {
  it("allows value to be changed by onChange", () => {
    const wrapper = mount(<TextField value="foo" />);
    const input = wrapper.find("input");

    expect(input.prop("value")).toEqual("foo");
    input.simulate("change", { target: { value: "bar" } });
    expect(input.prop("value")).toEqual("bar");
  });

  it("ignores changes to the value prop", () => {
    const wrapper = mount(<TextField value="foo" />);
    const input = wrapper.find("input");

    expect(input.prop("value")).toEqual("foo");
    wrapper.setProps({ value: "baz" });
    expect(input.prop("value")).toEqual("foo");
  });

  describe("id", () => {
    it("generates an ID when one is not provided", () => {
      const wrapper = mount(<TextField />);
      expect(wrapper.find(Input).prop("id")).toEqual(
        expect.stringMatching("text-field-")
      );
    });

    it("passes the ID prop to the underlying input", () => {
      const wrapper = mount(<TextField id="important-field" />);
      expect(wrapper.find(Input).prop("id")).toEqual("important-field");
    });
  });

  describe("event handlers", () => {
    it("calls onChange when provided", () => {
      const eventHandler = jest.fn();
      const wrapper = mount(<TextField onChange={eventHandler} />);
      wrapper.find("input").simulate("change", { target: { value: "foo" } });

      expect(eventHandler).toHaveBeenCalled();
    });

    it("calls onClearButtonClick when provided", () => {
      const eventHandler = jest.fn();
      const wrapper = mount(
        <TextField
          value="Foo"
          onClearButtonClick={eventHandler}
          showClearButton
        />
      );
      wrapper.find(".hig__text-field__clear button").simulate("click");
      expect(eventHandler).toHaveBeenCalled();
    });
  });

  describe("when displaying instructions", () => {
    const sampleInstructions = "Fill this out.";

    it("displays instructions without errors", () => {
      const wrapper = mount(<TextField instructions={sampleInstructions} />);
      expect(wrapper.text()).toEqual(expect.stringMatching(sampleInstructions));
    });

    it("displays instructions alongside errors", () => {
      const wrapper = mount(
        <TextField errors="Errors!" instructions={sampleInstructions} />
      );
      expect(wrapper.text()).toEqual(expect.stringMatching(sampleInstructions));
    });

    it("hides instructions when specifically configured to", () => {
      const wrapper = mount(
        <TextField
          instructions={sampleInstructions}
          errors="Errors!"
          hideInstructionsOnErrors
        />
      );
      expect(wrapper.text()).not.toEqual(
        expect.stringMatching(sampleInstructions)
      );
    });
  });
});
