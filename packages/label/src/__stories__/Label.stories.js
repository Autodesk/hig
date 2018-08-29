import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";

import getKnobs from "./getKnobs";
import Label from "../index";
import infoOptions from "./infoOptions";
import withThemeProvider from "./withThemeProvider";

const storybook = storiesOf("Theming|Themable Label", module);

storybook.add(
  "default",
  withInfo(infoOptions)(() => {
    const props = {
      children: "Email"
    };
    const { children, theme, ...otherProps } = getKnobs(props);

    return withThemeProvider(<Label {...otherProps}>{children}</Label>);
  })
);
