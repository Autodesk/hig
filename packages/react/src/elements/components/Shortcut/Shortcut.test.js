import renderer from "react-test-renderer";
import React from "react";
import { Shortcut } from "../../../hig-react";

describe("ShortCut", () => {
  it("renders correctly with link property", () => {
    const tree = renderer
      .create(<Shortcut icon="help" link="www.autodesk.com" title="help" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with onClick property", () => {
    const tree = renderer
      .create(
        <Shortcut
          icon="help"
          onClick={() => console.log("shortcute clicked")}
          title="help"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
