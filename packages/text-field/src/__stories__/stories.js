import React from "react";
import { Location24 } from "@hig/icons";

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
      icon: <Location24 />,
      showClearButton: true
    })
  }
];
