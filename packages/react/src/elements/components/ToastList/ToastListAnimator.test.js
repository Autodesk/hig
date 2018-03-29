import React from "react";
import { shallow } from "enzyme";
import ToastListAnimator from "./ToastListAnimator";

describe("ToastListAnimator", () => {
  it("adds classes based on provided position", () => {
    expect(shallow(<ToastListAnimator position="top" />)).toHaveClassName(
      "hig__toast-list--position-top"
    );
    expect(shallow(<ToastListAnimator position="bottom" />)).toHaveClassName(
      "hig__toast-list--position-bottom"
    );
  });
});
