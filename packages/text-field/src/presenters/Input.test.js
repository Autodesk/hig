import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Input from "./Input";

const subject = (props = {}) => mount(<Input {...props} />);

describe("Input", () => {
  let wrapper;
  it("renders correctly without a value", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("input attributes", () => {
    it("permits the disabled attribute", () => {
      wrapper = subject({ disabled: true });
      expect(wrapper.containsMatchingElement(<input disabled />)).toEqual(true);
    });

    it("permits the readonly attribute", () => {
      wrapper = subject({ readOnly: true });
      expect(wrapper.containsMatchingElement(<input readOnly />)).toEqual(true);
    });
  });

  describe("event handlers", () => {
    let eventHandler;

    describe("onBlur", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onBlur: eventHandler });
      });

      it("is triggered on blur", () => {
        wrapper.simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onChange: eventHandler });
      });

      it("is triggered on change", () => {
        wrapper.simulate("change");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onFocus", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onFocus: eventHandler });
      });

      it("is triggered on focus", () => {
        wrapper.simulate("focus");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onInput", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onInput: eventHandler });
      });

      it("is triggered on input", () => {
        wrapper.simulate("input");
        expect(eventHandler).toBeCalled();
      });
    });
  });
});
