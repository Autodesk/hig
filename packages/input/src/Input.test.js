import React from "react";
import renderer from "react-test-renderer";

import Input from "./index";

function snapshotTest(props) {
  const tree = renderer.create(<Input {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
}

const basicProps = {
  value: "jon.snow@winterfell.com"
};

const disabledProps = {
  value: "bran.stark@winterfell.com",
  disabled: true
};

describe("Input", () => {
  it("renders children", () => {
    snapshotTest(basicProps);
  });

  describe("when disabled", () => {
    snapshotTest(disabledProps);
  });
});
