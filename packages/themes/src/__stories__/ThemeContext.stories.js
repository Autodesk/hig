import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import readme from "../../README.md";
import ThemeContext from "../ThemeContext";

const themeContextStories = storiesOf("Theming|ThemeContext", module);

themeContextStories.add(
  "Provider",
  withInfo({
    propTables: [ThemeContext.Provider, ThemeContext.Consumer],
    /* eslint-disable-next-line react/no-danger */
    text: <div dangerouslySetInnerHTML={{ __html: readme }} />
  })(() => null)
);
