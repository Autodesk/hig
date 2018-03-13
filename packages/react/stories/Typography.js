import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography as VanillaTypography } from "hig-vanilla";
import { number, boolean, select } from "@storybook/addon-knobs/react";
import {
  H1,
  H2,
  H3,
  Text,
  Body,
  Bold,
  Caption,
  Disabled,
  Sub1,
  Sub2
} from "../src/hig-react";

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    const name = Component.name;

    storiesOf(name, module).add("with text", () => (
      <Component
        bold={boolean("Bold", false)}
        disabled={boolean("Disabled", false)}
        color={select(
          "Color",
          VanillaTypography.VALID_COLORS,
          "hig-cool-gray-70"
        )}
        opacity={number("Opacity", 1.0, {
          range: true,
          min: 0.0,
          max: 1.0,
          step: 0.1
        })}
        size={select("Size", VanillaTypography.VALID_SIZES, "medium")}
      >
        {`${name} example text`}
      </Component>
    ));
  }
);
