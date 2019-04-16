import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { Settings16 } from "@hig/icons";
import Spacer from "@hig/spacer";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <DefaultExport {...otherProps}>{children}</DefaultExport>
      <Spacer spacing="m" />
      <DefaultExport {...otherProps} icon={<Settings16 />} />
    </KnobbedThemeProvider>
  );
}
