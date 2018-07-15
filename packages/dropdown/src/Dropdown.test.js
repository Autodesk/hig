import renderer from "react-test-renderer";
import React from "react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  it("renders without props", () => {
    const tree = renderer.create(<Dropdown />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with a label and an ID", () => {
    const tree = renderer
      .create(<Dropdown id="whoaBuddy" label="HIG Themes" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
