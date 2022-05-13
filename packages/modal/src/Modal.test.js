import { mount } from "enzyme";
import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import Modal from "./Modal";

const customStylesheet = (styles) => ({
  ...styles,
  modal: {
    ...styles.modal,
    wrapper: {
      ...styles.modal.wrapper,
      color: "aliceblue",
    },
  },
});

describe("modal/Modal", () => {
  describe("integration", () => {
    takeSnapshotsOf(Modal, [
      {
        desc: "renders correctly",
        props: {
          body: "Hi",
          open: true,
          title: "HIG Modal",
        },
      },
      {
        desc: "renders with styles customized",
        props: {
          body: "Hi",
          open: true,
          title: "HIG Modal",
          stylesheet: customStylesheet,
        },
      },
      {
        desc: "renders with a custom css class name",
        props: {
          body: "Hi",
          open: true,
          title: "HIG Modal",
          className: "custom-class",
        },
      },
    ]);
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
        wrapper.find("ModalPresenter").simulate("click");

        expect(eventHandler).toHaveBeenCalled();
      });
    });
  });
});
