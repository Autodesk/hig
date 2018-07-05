import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  const subject = (props = {}) => mount(<Button title="Button" {...props} />);
  let wrapper;

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

    describe("onClick", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onClick: eventHandler });
      });

      it("is triggered on click", () => {
        wrapper.simulate("click");
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

    describe("onHover", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onHover: eventHandler });
      });

      it("is triggered on mouseover", () => {
        wrapper.simulate("mouseover");
        expect(eventHandler).toBeCalled();
      });
    });
  });

  describe("the element rendered", () => {
    let link;
    describe("given a link", () => {
      beforeEach(() => {
        link = "https://www.autodesk.com";
        wrapper = subject({ link });
      });

      it("is an <a> tag", () => {
        expect(wrapper.matchesElement(<a href={link}>Button</a>));
      });
    });

    describe("without a link", () => {
      beforeEach(() => {
        wrapper = subject();
      });

      it("is a <button> tag", () => {
        expect(wrapper.matchesElement(<button>Button</button>));
      });
    });
  });

  describe("when a disabled link", () => {
    beforeEach(() => {
      wrapper = subject({ link: "https://www.autodesk.com", disabled: true });
    });

    it("is not tabbable", () => {
      expect(wrapper.matchesElement(<a tabIndex="-1">Button</a>));
    });
  });
});
