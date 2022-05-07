import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Toggle from "./Toggle";

describe("toggle/Toggle", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Toggle />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with a custom className", () => {
      const tree = renderer
        .create(<Toggle className="custom-class" />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with a stylesheet function", () => {
      const customStyles = (styles) => ({
        ...styles,
        toggleWrapper: {
          ...styles.toggleWrapper,
          borderColor: "blue",
        },
      });
      const tree = renderer
        .create(<Toggle stylesheet={customStyles} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("event handlers", () => {
    let eventHandler;
    const subject = (props = {}) => mount(<Toggle {...props} />);
    let wrapper;

    beforeEach(() => {
      eventHandler = jest.fn();
      eventHandler.mockReset();
    });

    describe("onBlur", () => {
      beforeEach(() => {
        wrapper = mount(<Toggle onBlur={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("input").simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        wrapper = mount(<Toggle onChange={eventHandler} />);
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
