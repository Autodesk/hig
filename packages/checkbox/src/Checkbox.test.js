import React from "react";
import { mount } from "enzyme";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  const subject = (props = {}) => mount(<Checkbox title="Checkbox" {...props} />);
  let wrapper;

  describe("event handlers", () => {
    let eventHandler;

    describe("onBlur", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = mount(<Checkbox onBlur={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("input").simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = mount(<Checkbox onChange={eventHandler} />);
      });

      it("is triggered on change", () => {
        wrapper.find("input").simulate("change");

        expect(eventHandler).toHaveBeenCalled();
      });
    });

    describe("onFocus", () => {
      beforeEach(() => {
        eventHandler = jest.fn();
        wrapper = subject({ onFocus: eventHandler });
      });

      it("is triggered on focus", () => {
        wrapper.find("input").simulate("focus");
        expect(eventHandler).toBeCalled();
      });
    });
  });
});
