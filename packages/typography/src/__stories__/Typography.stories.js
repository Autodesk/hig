import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS
} from "../_constants";

import Typography from "../index";
import infoOptions from "./infoOptions";

const storybook = storiesOf("Basics|Typography", module);

function renderStory(component) {
  return <KnobbedThemeProvider>{component}</KnobbedThemeProvider>;
}

storybook.add(
  "base component",
  withInfo({ ...infoOptions, propTablesExclude: [KnobbedThemeProvider] })(
    () => {
      const component = (
        <Typography
          variant={select("Variant", AVAILABLE_VARIANTS, "body")}
          align={select("Text align", AVAILABLE_ALIGNMENTS, "left")}
          fontWeight={select("Font weight", AVAILABLE_FONT_WEIGHTS, "normal")}
        >
          This should render nicely.
        </Typography>
      );
      return renderStory(component);
    }
  )
);
