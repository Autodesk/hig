import renderer from "react-test-renderer";
import React from "react";

import { Settings24 } from "@hig/icons";
import IconButtonPresenter from "./IconButtonPresenter";

describe("IconButtonPresenter", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IconButtonPresenter title="Settings" icon={<Settings24 />} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a link", () => {
    const tree = renderer
      .create(
        <IconButtonPresenter
          title="Settings"
          link="//example.com"
          icon={<Settings24 />}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
