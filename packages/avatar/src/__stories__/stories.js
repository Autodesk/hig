import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import { sizes } from "../sizes";

export default [
  {
    description: "default",
    getProps: () => ({
      firstName: "Maria",
      lastName: "Smith",
      size: sizes.LARGE_48
    })
  },
  {
    description: "with picture",
    getProps: () => ({
      firstName: "Jonas",
      lastName: "James",
      image: avatarImagePath,
      size: sizes.LARGE_48
    })
  }
];
