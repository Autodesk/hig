import React from "react";
import { Settings24 } from "@hig/icons";

export default [
  {
    description: "default",
    getProps: () => ({
      title: "Button Title"
    })
  },
  {
    description: "as a link",
    getProps: () => ({
      link: "https://www.autodesk.com",
      target: "_blank",
      title: "Button Title"
    })
  },
  {
    description: "with icon",
    getProps: () => ({
      icon: <Settings24 />,
      title: "Settings"
    })
  }
];
