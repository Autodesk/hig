import React from "react";
import { mount, render } from "enzyme";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  const subject = (props = {}) =>
    mount(<Checkbox title="Checkbox" {...props} />);
  let wrapper;
  let checkbox;

  describe("integration", () => {
    beforeEach(() => {
      wrapper = render(<Checkbox checked={true} />);
      checkbox = wrapper.find(".hig__input-button");
    });

    it("renders a presenter", () => {
      expect(checkbox.length).not.toBe(0);
    });

    it("input element has checked class when props.checked is true", () => {
      expect(checkbox.hasClass("hig__input-button--checked"));
    });
  });

  describe("event handlers", () => {
    let eventHandler;

    beforeEach(() => {
      eventHandler = jest.fn();
      eventHandler.mockReset();
    });

    describe("onBlur", () => {
      beforeEach(() => {
        wrapper = mount(<Checkbox onBlur={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("input").simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        wrapper = mount(<Checkbox onChange={eventHandler} />);
      });

      it("is triggered on change", () => {
        wrapper.find("input").simulate("change");

        expect(eventHandler).toHaveBeenCalled();
      });
    });

    describe("onFocus", () => {
      beforeEach(() => {
        wrapper = subject({ onFocus: eventHandler });
      });

      it("is triggered on focus", () => {
        wrapper.find("input").simulate("focus");
        expect(eventHandler).toBeCalled();
      });
    });
  });
});
