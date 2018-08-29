import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import infoOptions from "./infoOptions";
import getKnobs from "./getKnobs";
import Dropdown from "../index";
import React from "react";

const storybook = storiesOf("Forms|Dropdown", module);

storybook.add(
  "default",
  withInfo(infoOptions)(() => {
    const props = {
      instructions: "Choose one HIG theme to apply to your entire app.",
      label: "HIG Theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"],
      placeholder: "Select a theme"
    };
    const { children, ...otherProps } = getKnobs(props);

    return <Dropdown {...otherProps}>{children}</Dropdown>;
  })
);
