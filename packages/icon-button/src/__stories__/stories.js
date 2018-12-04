import React from "react";
import { Settings24 } from "@hig/icons";

export default [
  {
    description: "default",
    getProps: () => ({
      disabled: false,
      icon: <Settings24 />,
      title: "Icon Button",
      type: "primary"
    })
  }
];
