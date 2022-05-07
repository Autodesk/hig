import React from "react";
import { shallow } from "enzyme";
import NotificationsToastListAnimator from "./NotificationsToastListAnimator";

describe("NotificationsToastListAnimator", () => {
  it("use proper animation objects based on provided placement", () => {
    const topPlacementAnimation = {
      from: {
        transform: "translateY(-36px)",
        opacity: 0,
      },
      to: { transform: "" },
    };
    const bottomPlacementAnimation = {
      from: {
        transform: "translateY(36px)",
        opacity: 0,
      },
      to: { transform: "" },
    };
    expect(
      shallow(<NotificationsToastListAnimator placement="top" />).props()
        .appearAnimation
    ).toEqual(topPlacementAnimation);
    expect(
      shallow(<NotificationsToastListAnimator placement="bottom" />).props()
        .appearAnimation
    ).toEqual(bottomPlacementAnimation);
  });
});
