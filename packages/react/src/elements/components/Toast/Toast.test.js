import React from "react";
import { shallow } from "enzyme";
import Toast from "./Toast";
import ToastPresenter from "./ToastPresenter";

describe("Toast", () => {
  it("renders a ToastPresenter", () => {
    const wrapper = shallow(<Toast>Who wants toast?</Toast>);
    expect(
      wrapper.matchesElement(<ToastPresenter>Who wants toast?</ToastPresenter>)
    ).toBe(true);
  });
});
