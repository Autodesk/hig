import React from "react";
import { storiesOf } from "@storybook/react";
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

    storiesOf(name, module)
      .add("with text", () => <Component>{`${name} example text`}</Component>)
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

    storiesOf(`${name}/sizes`, module)
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
