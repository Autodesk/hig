import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Checkbox label="HIG Checkbox" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("event handlers", () => {
    let eventHandler;
    const subject = (props = {}) =>
      mount(<Checkbox title="Checkbox" {...props} />);
    let wrapper;

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
