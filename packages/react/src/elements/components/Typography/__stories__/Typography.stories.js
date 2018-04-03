import React from "react";
import { storiesOf } from "@storybook/react";
import { number, boolean, select, text } from "@storybook/addon-knobs/react";
import Typography from "../Typography";
import { _VALID_COLORS, _VALID_SIZES, _VALID_TYPES } from "../_constants";
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
} from "..";

storiesOf("Typography", module).add("base component", () => (
  <Typography
    bold={boolean("Bold", false)}
    color={select("Color", _VALID_COLORS, "hig-cool-gray-70")}
    disabled={boolean("Disabled", false)}
    opacity={number("Opacity", 1.0, {
      min: 0.0,
      max: 1.0,
      step: 0.1
    })}
    size={select("Size", _VALID_SIZES, "medium")}
    type={select("Type", _VALID_TYPES, "text")}
    text={text("Text", "This should render nicely.")}
  />
));

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    const name = Component.name;

    storiesOf("Typography", module).add(name, () => (
      <Component
        bold={boolean("Bold", false)}
        color={select("Color", _VALID_COLORS, "hig-cool-gray-70")}
        disabled={boolean("Disabled", false)}
        opacity={number("Opacity", 1.0, {
          min: 0.0,
          max: 1.0,
          step: 0.1
        })}
        size={select("Size", _VALID_SIZES, "medium")}
      >
        {`${name} example text`}
      </Component>
    ));
  }
);
