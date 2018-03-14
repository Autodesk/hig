import React from "react";
import { storiesOf } from "@storybook/react";
import { number, boolean, select, text } from "@storybook/addon-knobs/react";
import Typography, {
  validColors,
  validSizes,
  validTypes
} from "../src/elements/components/Typography/Typography";
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

storiesOf("Typography", module).add("base component", () => (
  <Typography
    bold={boolean("Bold", false)}
    color={select("Color", validColors, "hig-cool-gray-70")}
    disabled={boolean("Disabled", false)}
    opacity={number("Opacity", 1.0, {
      min: 0.0,
      max: 1.0,
      step: 0.1
    })}
    size={text("Size")}
    type={select("Type", validTypes, "text")}
    text={text("Text", "This should render nicely.")}
  />
));

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    const name = Component.name;

    storiesOf("Typography", module).add(name, () => (
      <Component
        bold={boolean("Bold", false)}
        color={select("Color", validColors, "hig-cool-gray-70")}
        disabled={boolean("Disabled", false)}
        opacity={number("Opacity", 1.0, {
          min: 0.0,
          max: 1.0,
          step: 0.1
        })}
        size={select("Size", validSizes, "medium")}
      >
        {`${name} example text`}
      </Component>
    ));
  }
);
