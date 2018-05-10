import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { makeSelectOptions } from "@hig/storybook/utils";
import avatarImage from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import infoOptions from "./infoOptions";

import Avatar, { sizes } from "../index";

const sizeOptions = makeSelectOptions(sizes);

storiesOf("Avatar", module)
  .add(
    "default",
    withInfo(infoOptions)(() => (
      <Avatar
        name={text("Name", "Jon Snow")}
        size={select("Size", sizeOptions, sizes.LARGE_36)}
      />
    ))
  )

  .add(
    "with picture",
    withInfo(infoOptions)(() => (
      <Avatar
        name={text("Name", "Maria McCaplin")}
        size={select("Size", sizeOptions, sizes.LARGE_36)}
        image={text("Image URL", avatarImage)}
      />
    ))
  );
