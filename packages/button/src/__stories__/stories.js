import React from "react";
import Icon, { names as iconNames } from "@hig/icon";

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
      icon: <Icon name={iconNames.SETTINGS} />,
      title: "Settings"
    })
  }
];
