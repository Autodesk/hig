import renderer from "react-test-renderer";
import React from "react";
import { Icon } from "../../../hig-react";

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Icon nameOrSVG="settings" size="24" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
