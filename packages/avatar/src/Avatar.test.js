import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";

import Avatar, { sizes } from "./index";

describe("avatar/Avatar", () => {
  takeSnapshotsOf(Avatar, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with a name",
      props: {
        name: "Jon Snow",
      },
    },
    {
      desc: "renders with an image",
      props: {
        image: "http://placekitten.com/g/64/64",
      },
    },
    {
      desc: "renders with all props",
      props: {
        name: "Jon Snow",
        image: "http://placekitten.com/g/64/64",
        onImageError: function handleImageError() {},
        size: sizes.LARGE_48,
      },
    },
    {
      desc: "renders with className prop",
      props: {
        name: "Jon Snow",
        image: "http://placekitten.com/g/64/64",
        className: "my-class-a my-class-b",
        size: sizes.LARGE_48,
      },
    },
  ]);

  describe("Creating initials from name", () => {
    const singleStringNames = [
      { name: "John Snow", expectedInitials: "JS" },
      { name: "maria bamford", expectedInitials: "MB" },
      { name: "JustOneName", expectedInitials: "J" },
      { name: "Λεωνίδας ωή", expectedInitials: "ΛΩ" },
      { name: "Иван Виктор", expectedInitials: "ИВ" },
      { name: "安倍晋三", expectedInitials: "安" },
      { name: "Yu Jye Foo", expectedInitials: "YF" },
      { name: "Song Hye-gyo", expectedInitials: "SH" },
      { name: "송혜교", expectedInitials: "송" },
      { name: "高橋 留美子", expectedInitials: "高留" },
      { name: "W--first W--last", expectedInitials: "WW" },
    ];

    singleStringNames.forEach((nameData) => {
      it(`renders initials based on the single string name "${nameData.name}"`, () => {
        const wrapper = mount(<Avatar name={nameData.name} />);

        expect(wrapper.find("Initials").text()).toBe(nameData.expectedInitials);
      });
    });

    const firstLastNames = [
      { firstName: "John", lastName: "Snow", expectedInitials: "JS" },
      {
        firstName: "maria",
        lastName: "bamford",
        expectedInitials: "MB",
      },
      {
        firstName: "JustOneName",
        expectedInitials: "J",
      },
      {
        firstName: "Λεωνίδας",
        lastName: "ωή",
        expectedInitials: "ΛΩ",
      },
      {
        firstName: "Иван",
        lastName: "Виктор",
        expectedInitials: "ИВ",
      },
      {
        lastName: "安倍晋三",
        expectedInitials: "安",
      },
      {
        firstName: "Yu Jye",
        lastName: "Foo",
        expectedInitials: "YF",
      },
      {
        firstName: "Song",
        lastName: "Hye-gyo",
        expectedInitials: "SH",
      },
      {
        firstName: "송혜교",
        expectedInitials: "송",
      },
      {
        firstName: "高橋",
        lastName: "留美子",
        expectedInitials: "高留",
      },
      {
        firstName: "W--first",
        lastName: "W--last",
        expectedInitials: "WW",
      },
    ];

    firstLastNames.forEach((nameData) => {
      it(`renders initials based on first and last names "${nameData.firstName}" "${nameData.lastName}"`, () => {
        const wrapper = mount(
          <Avatar firstName={nameData.firstName} lastName={nameData.lastName} />
        );

        expect(wrapper.find("Initials").text()).toBe(nameData.expectedInitials);
      });
    });
  });

  describe("css background colors", () => {
    it("calculates background color based on full name", () => {
      const wrapper = mount(<Avatar firstName="John" lastName="Snow" />);
      expect(
        window
          .getComputedStyle(wrapper.find("span").first().getDOMNode())
          .getPropertyValue("background-color")
      ).toEqual("rgb(190, 41, 190)");

      const wrapper2 = mount(<Avatar firstName="John" lastName="Snoz" />);
      expect(
        window
          .getComputedStyle(wrapper2.find("span").first().getDOMNode())
          .getPropertyValue("background-color")
      ).toEqual("rgb(188, 43, 43)");
    });
  });

  describe("when label prop is not provided", () => {
    it("uses the default aria-label message", () => {
      const wrapper = mount(<Avatar firstName="John" lastName="Snow" />);

      expect(wrapper.find("span").first().props()["aria-label"]).toEqual(
        "Avatar for John Snow"
      );
    });
  });

  describe("when label prop is provided", () => {
    it("overrides the default aria-label message", () => {
      const wrapper = mount(
        <Avatar firstName="John" lastName="Snow" label="Avatar en Español" />
      );

      expect(wrapper.find("span").first().props()["aria-label"]).toEqual(
        "Avatar en Español"
      );
    });
  });

  describe("when imageAlt prop is not provided", () => {
    it("uses the default alt message", () => {
      const wrapper = mount(
        <Avatar
          firstName="John"
          lastName="Snow"
          image="http://placekitten.com/g/64/64"
        />
      );

      expect(wrapper.find("Image").props().alt).toEqual(
        "Avatar image of John Snow"
      );
    });
  });

  describe("when imageAlt prop is provided", () => {
    it("overrides the default aria-label message", () => {
      const wrapper = mount(
        <Avatar
          firstName="John"
          lastName="Snow"
          image="http://placekitten.com/g/64/64"
          imageAlt="Comment dit-ons"
        />
      );

      expect(wrapper.find("Image").props().alt).toEqual("Comment dit-ons");
    });
  });

  describe("when an image URL is not provided", () => {
    it("renders initials based on the provided name", () => {
      const wrapper = mount(
        <Avatar firstName="John" lastName="Snow" size={sizes.LARGE_48} />
      );

      expect(wrapper.find("Initials").text()).toBe("JS");
    });
  });

  describe("when an image URL is provided", () => {
    describe("when an error occurs on the image", () => {
      it("doesn't render the image", () => {
        const wrapper = mount(
          <Avatar
            firstName="John"
            lastName="Snow"
            image="http://placekitten.com/g/64/64"
            size={sizes.LARGE_48}
          />
        );

        expect(wrapper.find("img").exists());

        wrapper.find("img").simulate("error");

        expect(wrapper.find("img")).not.toBe();
      });
    });
  });
});
