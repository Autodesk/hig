import React from "react";
import renderer from "react-test-renderer";

import Label from "./index";

function snapshotTest(props) {
  const tree = renderer.create(<Label {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
}

const basicProps = {
  children: "Jon Snow"
};

describe("Label", () => {
  describe("when an image URL is not provided", () => {
    it("renders children", () => {
      snapshotTest(basicProps);
    });
  });
});
