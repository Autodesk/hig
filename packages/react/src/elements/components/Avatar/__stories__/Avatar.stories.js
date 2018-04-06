import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import avatarImage from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import Avatar, { _AVAILABLE_SIZES } from "../index";

storiesOf("Avatar", module)
  .add(
    "default",
    withInfo()(() => (
      <Avatar
        name={text("Name", "Jon Snow")}
        size={select("Size", _AVAILABLE_SIZES, "large")}
      />
    ))
  )

  .add(
    "with picture",
    withInfo()(() => (
      <Avatar
        name={text("Name", "Maria McCaplin")}
        size={select("Size", _AVAILABLE_SIZES, "large")}
        image={text("Image URL", avatarImage)}
      />
    ))
  );
