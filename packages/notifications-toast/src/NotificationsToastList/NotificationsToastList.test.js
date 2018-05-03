import React from "react";
import { mount } from "enzyme";
import NotificationsToastList from "./NotificationsToastList";
import NotificationsToast from "../NotificationsToast";

describe("NotificationsToastList", () => {
  it("renders the first three children, at most", () => {
    const wrapper = mount(
      <NotificationsToastList>
        <NotificationsToast>1</NotificationsToast>
        <NotificationsToast>2</NotificationsToast>
        <NotificationsToast>3</NotificationsToast>
        <NotificationsToast>4</NotificationsToast>
      </NotificationsToastList>
    );

    expect(
      wrapper.containsMatchingElement(
        <NotificationsToast>1</NotificationsToast>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <NotificationsToast>2</NotificationsToast>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <NotificationsToast>3</NotificationsToast>
      )
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <NotificationsToast>4</NotificationsToast>
      )
    ).toBe(false);
  });
});
