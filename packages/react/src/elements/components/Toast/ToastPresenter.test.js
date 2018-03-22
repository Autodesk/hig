import React from "react";
import { mount } from "enzyme";
import ToastPresenter from "./ToastPresenter";
import { IconButton } from "../../../hig-react";

describe("ToastPresenter", () => {
  it("renders the message", () => {
    const wrapper = mount(<ToastPresenter>Who wants toast?</ToastPresenter>);
    expect(wrapper).toIncludeText("Who wants toast?");
  });

  it("passes onDismiss to the dismiss IconButton", () => {
    const onDismissFn = jest.fn();
    const wrapper = mount(
      <ToastPresenter onDismiss={onDismissFn}>Who wants toast?</ToastPresenter>
    );

    expect(wrapper.find(IconButton)).toHaveProp("onClick", onDismissFn);
  });

  it("adds an image to the expected container", () => {
    const thumbnail = (
      <img src="placekitten.com/g/60/60" alt="placekitten 60x60" />
    );
    const wrapper = mount(
      <ToastPresenter image={thumbnail}>Who wants toast?</ToastPresenter>
    );

    expect(
      wrapper.containsMatchingElement(
        <div className="hig__toast__image-container">{thumbnail}</div>
      )
    ).toBe(true);
  });

  describe("statuses", () => {
    it("is primary by default", () => {
      const wrapper = mount(<ToastPresenter>Who wants toast?</ToastPresenter>);
      expect(wrapper).toHaveProp("status", "primary");
    });

    it("adds the appropriate style to the component", () => {
      const withoutStatus = mount(
        <ToastPresenter>Who wants toast?</ToastPresenter>
      );
      expect(withoutStatus.find(".hig__toast")).not.toHaveClassName(
        "hig__toast--success"
      );

      const withStatus = mount(
        <ToastPresenter status="success">Who wants toast?</ToastPresenter>
      );
      expect(withStatus.find(".hig__toast")).toHaveClassName(
        "hig__toast--success"
      );
    });
  });
});
