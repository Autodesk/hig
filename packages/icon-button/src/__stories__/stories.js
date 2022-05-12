import React from "react";
import { Settings24 } from "@hig/icons";

export default [
  {
    description: "default",
    getProps: () => ({
      disabled: false,
      icon: <Settings24 />,
      on: false,
      title: "Icon Button",
    }),
  },
];
