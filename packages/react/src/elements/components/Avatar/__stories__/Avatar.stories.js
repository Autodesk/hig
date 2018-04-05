import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import Avatar, { _AVAILABLE_SIZES } from "../index";
import avatarImage from "./avatar.png";

storiesOf("Avatar", module)
  .add("default", () => (
    <Avatar
      name={text("Name", "Jon Snow")}
      size={select("Size", _AVAILABLE_SIZES, "large")}
    />
  ))

  .add("with picture", () => (
    <Avatar
      name={text("Name", "Maria McCaplin")}
      size={select("Size", _AVAILABLE_SIZES, "large")}
      image={text("Image URL", avatarImage)}
    />
  ));
