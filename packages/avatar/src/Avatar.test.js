import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Avatar, { sizes } from "./index";

function snapshotTest(props) {
  const tree = renderer.create(<Avatar {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
}

const basicProps = {
  name: "Jon Snow",
  size: sizes.LARGE_36
};

describe("Avatar", () => {
  describe("when an image URL is not provided", () => {
    it("renders initials", () => {
      snapshotTest(basicProps);
    });

    it("renders initials based on the provided name", () => {
      const wrapper = mount(<Avatar {...basicProps} />).find("Initials");

      expect(wrapper).toIncludeText("JS");
    });
  });

  describe("when an image URL is provided", () => {
    it("renders an image", () => {
      snapshotTest({
        ...basicProps,
        image: "http://placekitten.com/g/64/64"
      });
    });
  });
});
