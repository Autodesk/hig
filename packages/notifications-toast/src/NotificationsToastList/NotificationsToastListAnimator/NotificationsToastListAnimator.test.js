import React from "react";
import { shallow } from "enzyme";
import NotificationsToastListAnimator from "./NotificationsToastListAnimator";

describe("NotificationsToastListAnimator", () => {
  it("adds classes based on provided placement", () => {
    expect(
      shallow(<NotificationsToastListAnimator placement="top" />)
    ).toHaveClassName("hig__toast-list--placement-top");
    expect(
      shallow(<NotificationsToastListAnimator placement="bottom" />)
    ).toHaveClassName("hig__toast-list--placement-bottom");
  });
});
