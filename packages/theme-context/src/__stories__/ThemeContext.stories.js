import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import readme from "../../README.md";
import { Provider, Consumer } from "../ThemeContext";

const themeContextStories = storiesOf("Theming|ThemeContext", module);

themeContextStories.add(
  "readme",
  withInfo({
    propTables: [Provider, Consumer],
    /* eslint-disable-next-line react/no-danger */
    text: <div dangerouslySetInnerHTML={{ __html: readme }} />,
  })(() => null)
);
