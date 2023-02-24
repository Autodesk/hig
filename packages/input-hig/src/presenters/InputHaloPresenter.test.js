import React from "react";
import renderer from "react-test-renderer";

import InputHaloPresenter from "./InputHaloPresenter";

describe("InputHaloPresenter", () => {
  it("renders by default", () => {
    expect(renderer.create(<InputHaloPresenter />).toJSON()).toMatchSnapshot();
  });

  it("renders with hover", () => {
    expect(
      renderer.create(<InputHaloPresenter hasHover />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with focus", () => {
    expect(
      renderer.create(<InputHaloPresenter hasFocus />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders when disabled", () => {
    expect(
      renderer.create(<InputHaloPresenter isDisabled />).toJSON()
    ).toMatchSnapshot();
  });
  it("renders when error", () => {
    expect(
      renderer.create(<InputHaloPresenter error />).toJSON()
    ).toMatchSnapshot();
  });
});
