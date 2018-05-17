import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { select, text } from "@storybook/addon-knobs/react";
import TextLink from "../index";
import infoOptions from "./infoOptions";
import { types, AVAILABLE_TYPES } from "../types";

storiesOf("TextLink", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <TextLink
      link={text("Link", "https://github.com/Autodesk/hig")}
      onClick={action("onClick")}
      type={select("Type", AVAILABLE_TYPES, types.PRIMARY)}
    >
      {text("Children", "This is a primary text link")}
    </TextLink>
  ))
);
