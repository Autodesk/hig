import Input from "@hig/input";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import Spacer from "@hig/spacer";

import getKnobs from "./getKnobs";
import Label from "../index";
import infoOptions from "./infoOptions";
import withThemeProvider from "./withThemeProvider";

const storybook = storiesOf("Forms|Label", module);

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

storybook.add(
  "top label",
  withInfo(infoOptions)(() => {
    const props = {
      children: "Input Field"
    };
    const { children, theme, ...otherProps } = getKnobs(props);

    return withThemeProvider(
      <form id="a_form">
        <Label form="a_form" htmlFor="an_input" variant="top" {...otherProps}>
          {children}
        </Label>
        <Spacer spacing="s" />
        <Input id="an_input" variant="box" />
      </form>
    );
  })
);

storybook.add(
  "side label",
  withInfo(infoOptions)(() => {
    const props = {
      children: "Input Field"
    };
    const { children, theme, ...otherProps } = getKnobs(props);

    return withThemeProvider(
      <form id="a_form" style={{ display: "flex", alignItems: "center" }}>
        <Label form="a_form" htmlFor="an_input" variant="side" {...otherProps}>
          {children}
        </Label>
        <Spacer spacing="s" />
        <Input id="an_input" variant="box" />
      </form>
    );
  })
);
