import { mount } from "enzyme";
import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Modal from "./Modal";

describe("modal/Modal", () => {
  describe("integration", () => {
    takeSnapshotsOf(Modal, [
      {
        description: "renders correctly",
        props: {
          body: "Hi",
          open: true,
          title: "HIG Modal"
        }
      }
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
        wrapper.find(".hig__modal-V1__overlay").simulate("click");

        expect(eventHandler).toHaveBeenCalled();
      });
    });
  });
});
