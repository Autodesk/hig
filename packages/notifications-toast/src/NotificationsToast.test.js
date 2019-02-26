import React from "react";
import { mount } from "enzyme";
import IconButton from "@hig/icon-button";
import NotificationsToast from "./index";

describe("NotificationsToast", () => {
  it("renders the message", () => {
    const wrapper = mount(
      <NotificationsToast>Who wants toast?</NotificationsToast>
    );
    expect(wrapper).toIncludeText("Who wants toast?");
  });

  it("passes onDismiss to the dismiss IconButton", () => {
    const onDismissFn = jest.fn();
    const wrapper = mount(
      <NotificationsToast onDismiss={onDismissFn}>
        Who wants toast?
      </NotificationsToast>
    );

    expect(wrapper.find(IconButton)).toHaveProp("onClick", onDismissFn);
  });

  describe("images", () => {
    it("adds an image to the expected container", () => {
      const thumbnail = (
        <img src="placekitten.com/g/60/60" alt="placekitten 60x60" />
      );
      const wrapper = mount(
        <NotificationsToast image={thumbnail}>
          Who wants toast?
        </NotificationsToast>
      );

      expect(wrapper.containsMatchingElement(<div>{thumbnail}</div>)).toBe(
        true
      );
    });

    it("prefers rendering an image over a status icon", () => {
      const thumbnail = (
        <img src="placekitten.com/g/60/60" alt="placekitten 60x60" />
      );
      const wrapper = mount(
        <NotificationsToast showStatusIcon image={thumbnail}>
          Who wants toast?
        </NotificationsToast>
      );

      expect(wrapper.containsMatchingElement(<div>{thumbnail}</div>)).toBe(
        true
      );
    });
  });

  describe("statuses", () => {
    it("is primary by default", () => {
      const wrapper = mount(
        <NotificationsToast>Who wants toast?</NotificationsToast>
      );
      expect(wrapper).toHaveProp("status", "primary");
    });
  });

  describe("status icons", () => {
    it("is true by default", () => {
      const wrapper = mount(
        <NotificationsToast>Who wants toast?</NotificationsToast>
      );
      expect(wrapper).toHaveProp("showStatusIcon", true);
    });
  });
});
