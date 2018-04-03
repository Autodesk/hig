import React from "react";
import { shallow } from "enzyme";
import ToastListAnimator from "./ToastListAnimator";

describe("ToastListAnimator", () => {
  it("adds classes based on provided placement", () => {
    expect(shallow(<ToastListAnimator placement="top" />)).toHaveClassName(
      "hig__toast-list--placement-top"
    );
    expect(shallow(<ToastListAnimator placement="bottom" />)).toHaveClassName(
      "hig__toast-list--placement-bottom"
    );
  });
});
