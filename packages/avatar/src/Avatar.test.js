import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";

import Avatar, { sizes } from "./index";

describe("avatar/Avatar", () => {
  takeSnapshotsOf(Avatar, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with a name",
      props: {
        name: "Jon Snow"
      }
    },
    {
      description: "renders with an image",
      props: {
        image: "http://placekitten.com/g/64/64"
      }
    },
    {
      description: "renders with all props",
      props: {
        name: "Jon Snow",
        image: "http://placekitten.com/g/64/64",
        onImageError: function handleImageError() {},
        size: sizes.LARGE_48
      }
    }
  ]);

  describe("when an image URL is not provided", () => {
    it("renders initials based on the provided name", () => {
      const wrapper = mount(<Avatar name="Jon Snow" size={sizes.LARGE_48} />);

      expect(wrapper.find("Initials")).toIncludeText("JS");
    });
  });

  describe("when an image URL is provided", () => {
    describe("when an error occurs on the image", () => {
      it("doesn't render the image", () => {
        const wrapper = mount(
          <Avatar
            name="Jon Snow"
            image="http://placekitten.com/g/64/64"
            size={sizes.LARGE_48}
          />
        );

        expect(wrapper.find("img")).toBePresent();

        wrapper.find("img").simulate("error");

        expect(wrapper.find("img")).not.toBePresent();
      });
    });
  });
});
