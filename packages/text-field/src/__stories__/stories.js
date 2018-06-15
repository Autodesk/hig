import React from "react";
import Icon from "@hig/icon";

export default [
  {
    description: "default",
    getProps: () => ({
      label: "Comments",
      placeholder: "Enter your comments here.",
      required: "This field is required.",
      showClearButton: true
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      label: "Comments",
      placeholder: "Enter your comments here.",
      disabled: true
    })
  },
  {
    description: "with preceding icon",
    getProps: () => ({
      label: "Comments",
      placeholder: "Enter your comments here.",
      required: "This field is required.",
      icon: <Icon name="location" />,
      showClearButton: true
    })
  }
];
