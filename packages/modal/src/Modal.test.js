import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Modal from "./Modal";

describe("modal/ModalModal", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = mount(
        <Modal title="HIG Modal" open={true} body={"Hi"} />
      ).html();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("event handlers", () => {
    let eventHandler;
    const subject = (props = {}) => mount(<Modal title="Modal" {...props} />);
    let wrapper;

    eventHandler = jest.fn();
    eventHandler.mockReset();

    describe("onBlur", () => {
      beforeEach(() => {
        wrapper = mount(<Modal onBlur={eventHandler} />);
        console.log(wrapper.html());
      });

      it("is triggered on blur", () => {
        wrapper.find("Button").simulate("blur");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onChange", () => {
      beforeEach(() => {
        wrapper = mount(<Modal onChange={eventHandler} />);
      });

      it("is triggered on change", () => {
        wrapper.find("div.hig__modal__overlay").simulate("change");

        expect(eventHandler).toHaveBeenCalled();
      });
    });

    describe("onFocus", () => {
      beforeEach(() => {
        wrapper = subject({ onFocus: eventHandler });
      });

      it("is triggered on focus", () => {
        wrapper.find("div.hig__modal__overlay").simulate("focus");
        expect(eventHandler).toBeCalled();
      });
    });
  });
});
