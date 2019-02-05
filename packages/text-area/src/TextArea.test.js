import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import TextArea from "./TextArea";

describe("TextArea", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<TextArea />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("event handlers", () => {
    const eventHandler = jest.fn();
    const subject = (props = {}) =>
      mount(<TextArea title="TextArea" {...props} />);
    let wrapper;

    beforeEach(() => {
      eventHandler.mockReset();
    });

    describe("onBlur", () => {
      beforeEach(() => {
        wrapper = mount(<TextArea onBlur={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("textarea").simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        wrapper = mount(<TextArea onChange={eventHandler} />);
      });

      it("is triggered on change", () => {
        wrapper.find("textarea").simulate("change");

        expect(eventHandler).toHaveBeenCalled();
      });
    });

    describe("onFocus", () => {
      beforeEach(() => {
        wrapper = subject({ onFocus: eventHandler });
      });

      it("is triggered on focus", () => {
        wrapper.find("textarea").simulate("focus");
        expect(eventHandler).toBeCalled();
      });
    });
  });
});
