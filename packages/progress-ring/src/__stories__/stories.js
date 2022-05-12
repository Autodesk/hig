import { text } from "@storybook/addon-knobs/react";

export default [
  {
    description: "determinate",
    getProps: () => ({
      percentComplete: text("Percent Complete", "33"),
    }),
  },
  {
    description: "indeterminate",
    getProps: () => {},
  },
];
