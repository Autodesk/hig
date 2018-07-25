import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import RadioButton from "./RadioButton";

describe("radio-button/RadioButton", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<RadioButton label="HIG RadioButton" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("event handlers", () => {
    const subject = (props = {}) =>
      mount(<RadioButton title="RadioButton" {...props} />);
    let wrapper;

    const eventHandler = jest.fn();
    eventHandler.mockReset();

    describe("onBlur", () => {
      beforeEach(() => {
        wrapper = mount(<RadioButton onBlur={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("input").simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        wrapper = mount(<RadioButton onChange={eventHandler} />);
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
