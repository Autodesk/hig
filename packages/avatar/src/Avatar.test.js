import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";

import Avatar, { sizes } from "./index";

describe("avatar/Avatar", () => {
  takeSnapshotsOf(Avatar, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with a name",
      props: {
        name: "Jon Snow"
      }
    },
    {
      desc: "renders with an image",
      props: {
        image: "http://placekitten.com/g/64/64"
      }
    },
    {
      desc: "renders with all props",
      props: {
        name: "Jon Snow",
        image: "http://placekitten.com/g/64/64",
        onImageError: function handleImageError() {},
        size: sizes.LARGE_48
      }
    },
    {
      desc: "renders with className prop",
      props: {
        name: "Jon Snow",
        image: "http://placekitten.com/g/64/64",
        className: "my-class-a my-class-b",
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
