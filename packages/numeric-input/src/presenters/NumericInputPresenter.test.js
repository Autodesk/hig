import React from "react";
import renderer from "react-test-renderer";

import NumericInputPresenter from "./NumericInputPresenter";

describe("NumericInputPresenter", () => {
  it("renders by default", () => {
    expect(
      renderer.create(<NumericInputPresenter />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with id", () => {
    expect(
      renderer.create(<NumericInputPresenter id="my_id" />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with hover", () => {
    expect(
      renderer.create(<NumericInputPresenter hasHover />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders with focus", () => {
    expect(
      renderer.create(<NumericInputPresenter hasFocus />).toJSON()
    ).toMatchSnapshot();
  });

  it("renders when disabled", () => {
    expect(
      renderer.create(<NumericInputPresenter isDisabled />).toJSON()
    ).toMatchSnapshot();
  });
});
