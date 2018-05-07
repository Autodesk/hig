import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

const subject = (props = {}) => mount(<Button title="Button" {...props} />);

describe("Button", () => {
  describe("event handlers", () => {
    describe("onBlur", () => {
      it("is triggered on blur", () => {
        const blurHandler = jest.fn();
        const wrapper = subject({ onBlur: blurHandler });

        wrapper.simulate("blur");

        expect(blurHandler).toBeCalled();
      });
    });

    describe("onClick", () => {
      it("is triggered on click", () => {
        const clickHandler = jest.fn();
        const wrapper = subject({ onClick: clickHandler });

        wrapper.simulate("click");

        expect(clickHandler).toBeCalled();
      });
    });

    describe("onFocus", () => {
      it("is triggered on focus", () => {
        const focusHandler = jest.fn();
        const wrapper = subject({ onFocus: focusHandler });

        wrapper.simulate("focus");

        expect(focusHandler).toBeCalled();
      });
    });

    describe("onHover", () => {
      it("is triggered on mouseover", () => {
        const hoverHandler = jest.fn();
        const wrapper = subject({ onHover: hoverHandler });

        wrapper.simulate("mouseover");

        expect(hoverHandler).toBeCalled();
      });
    });
  });

  describe("the element rendered", () => {
    it("is an <a> tag given a link", () => {
      const link = "https://www.autodesk.com";
      const wrapper = subject({ link });
      expect(wrapper.matchesElement(<a href={link}>Button</a>));
    });

    it("is a <button> tag without a link", () => {
      const wrapper = subject();
      expect(wrapper.matchesElement(<button>Button</button>));
    });
  });
});
