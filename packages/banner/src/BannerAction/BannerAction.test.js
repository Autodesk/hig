import React from "react";
import renderer from "react-test-renderer";

import BannerAction from "./BannerAction";

describe("banner/BannerAction/BannerAction", () => {
  it("renders with children", () => {
    const action = <BannerAction>Hello</BannerAction>;
    const tree = renderer.create(action).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("renders with custom stylesheet", () => {
    const customStylesheet = styles => ({
      ...styles,
      display: "absolute"
    });
    const action = (
      <BannerAction stylesheet={customStylesheet}>Hello</BannerAction>
    );
    const tree = renderer.create(action).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
