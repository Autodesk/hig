import renderer from "react-test-renderer";
import React from "react";

import { names } from "../Icons/icons";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("has type constants", () => {
    expect(IconButton).toHavePropertyOfConstants("types");
  });

  it("renders correctly", () => {
    const tree = renderer.create(<IconButton name={names.SETTINGS} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a link", () => {
    const tree = renderer
      .create(
        <IconButton
          title="Settings"
          link="//example.com"
          name={names.SETTINGS}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with the `icon` prop", () => {
    const tree = renderer.create(<IconButton icon={names.SETTINGS} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
