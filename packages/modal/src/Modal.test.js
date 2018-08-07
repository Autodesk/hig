import { mount } from "enzyme";
import React from "react";
import Modal from "./Modal";

describe("modal/Modal", () => {
  describe("integration", () => {
    it("renders correctly", () => {
      const tree = mount(<Modal title="HIG Modal" open body={"Hi"} />).html();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("event handlers", () => {
    let wrapper;

    const eventHandler = jest.fn();
    eventHandler.mockReset();

    describe("onCloseClick", () => {
      beforeEach(() => {
        wrapper = mount(<Modal open onCloseClick={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("IconButton").simulate("click");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onOverlayClick", () => {
      beforeEach(() => {
        wrapper = mount(<Modal open onOverlayClick={eventHandler} />);
      });

      it("is triggered on change", () => {
        wrapper.find("a.hig__modal-V1__overlay").simulate("click");

        expect(eventHandler).toHaveBeenCalled();
      });
    });
  });
});
