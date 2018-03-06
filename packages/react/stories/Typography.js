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
import arrayToObject from "../.storybook/arrayToObject";

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    const name = Component.name;

    storiesOf(name, module)
      .add("with text", () => (
        <Component
          bold={boolean("Bold", false)}
          disabled={boolean("Disabled", false)}
          color={select("Color", arrayToObject(VanillaTypography.VALID_COLORS))}
          opacity={number("Opacity", 1.0, {
            range: true,
            min: 0.0,
            max: 1.0,
            step: 0.1
          })}
          size={select("Size", arrayToObject(VanillaTypography.VALID_SIZES))}
        >
          {`${name} example text`}
        </Component>
      ))
      .add("bold", () => <Component bold>{`${name} example text`}</Component>)
      .add("disabled", () => (
        <Component disabled>{`${name} example text`}</Component>
      ))
      .add("with custom colors", () => (
        <Component color="hig-blue-50">{`${name} example text`}</Component>
      ))
      .add("with 0.5 opacity", () => (
        <Component opacity={0.5}>{`${name} example text`}</Component>
      ));

    storiesOf(`${name}/Sizes`, module)
      .add("small", () => (
        <Component size="small">{`${name} example text`}</Component>
      ))
      .add("medium", () => (
        <Component size="medium">{`${name} example text`}</Component>
      ))
      .add("large", () => (
        <Component size="large">{`${name} example text`}</Component>
      ));
  }
);
