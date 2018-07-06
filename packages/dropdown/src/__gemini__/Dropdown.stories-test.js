import React from "react";
import { storiesOf } from "@storybook/react";

import Dropdown from "../index";

const defaultProps = {
  label: "HIG Theme",
  instructions: "Choose one HIG theme to apply to your entire app.",
  placeholder: "Select a theme",
  options: [
    {
      label: "HIG Light Theme",
      value: "HIGLightTheme"
    },
    {
      label: "HIG Dark Blue Theme",
      value: "HIGDarkBlueTheme"
    },
    {
      label: "Matrix Theme",
      value: "MatrixTheme"
    }
  ]
};

storiesOf("Dropdown", module).add("basic", () => (
  <Dropdown {...defaultProps} />
));
