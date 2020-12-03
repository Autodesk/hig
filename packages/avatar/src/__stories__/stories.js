import avatarImagePath from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import { sizes } from "../sizes";

export default [
  {
    description: "default",
    getProps: () => ({
      name: "Maria Smith",
      firstName: "",
      lastName: "",
      size: sizes.LARGE_48
    })
  },
  {
    description: "with picture",
    getProps: () => ({
      name: "",
      firstName: "Jonas",
      lastName: "James",
      image: avatarImagePath,
      size: sizes.LARGE_48
    })
  }
];
