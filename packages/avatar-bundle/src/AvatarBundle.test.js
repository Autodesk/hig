import { sizes } from "@hig/avatar";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import AvatarBundle, { spacings } from "./index";

describe("avatar-bundle/AvatarBundle", () => {
  takeSnapshotsOf(AvatarBundle, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with one avatar",
      props: {
        avatars: [{ name: "Jon Snow" }]
      }
    },
    {
      desc: "renders with two avatars",
      props: {
        avatars: [
          { name: "Jon Snow" },
          { image: "http://placekitten.com/g/64/64" }
        ]
      }
    },
    {
      desc: "renders with three avatars",
      props: {
        avatars: [
          { name: "Jon Snow" },
          { image: "http://placekitten.com/g/64/64" },
          { name: "Jon Snow", image: "http://placekitten.com/g/64/64" }
        ]
      }
    },
    {
      desc: "renders with four avatars",
      props: {
        avatars: [
          { name: "Jon Snow" },
          { image: "http://placekitten.com/g/64/64" },
          { name: "Jon Snow" },
          { name: "Jon Snow", image: "http://placekitten.com/g/64/64" }
        ]
      }
    },
    {
      desc: "renders three avatars with overflow count",
      props: {
        showOverflowCount: true,
        avatars: [
          {
            name: "Jon Snow",
            image: "http://placekitten.com/g/64/64",
            onImageError: function handleImageError() {}
          },
          { image: "http://placekitten.com/g/64/64" },
          { name: "Jon Snow" }
        ]
      }
    },
    {
      desc: "renders four avatars with overflow count",
      props: {
        showOverflowCount: true,
        avatars: [
          {
            name: "Jon Snow",
            image: "http://placekitten.com/g/64/64",
            onImageError: function handleImageError() {}
          },
          { image: "http://placekitten.com/g/64/64" },
          { image: "http://placekitten.com/g/64/64" },
          { name: "Jon Snow" }
        ]
      }
    },
    {
      desc: "renders 102+ avatars with overflow count",
      props: {
        showOverflowCount: true,
        avatars: (() => {
          const arr = [];
          for (let i = 0; i < 120; i += 1) {
            arr.push({ name: "Jon Snow" });
          }
          return arr;
        })()
      }
    },
    {
      desc: "renders with all props",
      props: {
        size: sizes.LARGE_48,
        spacing: spacings.SUPER_CONDENSED,
        borderColor: "#D33E3E",
        showOverflowCount: true,
        avatars: [
          {
            name: "Jon Snow",
            image: "http://placekitten.com/g/64/64",
            onImageError: function handleImageError() {}
          },
          { image: "http://placekitten.com/g/64/64" },
          { name: "Jon Snow" },
          { name: "Jon Snow", image: "http://placekitten.com/g/64/64" }
        ],
        className: "my-class-a my-class-b"
      }
    }
  ]);
});
