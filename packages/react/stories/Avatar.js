import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import Avatar, { _AVAILABLE_SIZES } from "../src/elements/components/Avatar";

storiesOf("Avatar", module)
  .add("default", () => (
    <Avatar
      name={text("Name", "Jon Snow")}
      size={select("Size", _AVAILABLE_SIZES, "large")}
    />
  ))

  .add("with picture", () => (
    <Avatar
      name={text("Name", "Place Kitten")}
      size={select("Size", _AVAILABLE_SIZES, "large")}
      image={text("Image URL", "http://placekitten.com/g/64/64")}
    />
  ));
