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

const imageProps = {
  ...basicProps,
  image: "http://placekitten.com/g/64/64"
};

describe("Avatar", () => {
  describe("when an image URL is not provided", () => {
    it("renders initials", () => {
      snapshotTest(basicProps);
    });

    it("renders initials based on the provided name", () => {
      const wrapper = mount(<Avatar {...basicProps} />);

      expect(wrapper.find("Initials")).toIncludeText("JS");
    });
  });

  describe("when an image URL is provided", () => {
    it("renders initials and the image", () => {
      snapshotTest(imageProps);
    });

    describe("when an error occurs on the image", () => {
      it("doesn't render the image", () => {
        const wrapper = mount(<Avatar {...imageProps} />);

        expect(wrapper.find("img")).toBePresent();

        wrapper.find("img").simulate("error");

        expect(wrapper.find("img")).not.toBePresent();
      });
    });
  });
});
