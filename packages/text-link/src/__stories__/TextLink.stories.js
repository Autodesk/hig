import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TextLink from "../index";
import infoOptions from "./infoOptions";

storiesOf("TextLink", module)
  .add(
    "primary",
    withInfo(infoOptions)(() => (
      <TextLink
        href="https://github.com/Autodesk/hig"
        text="This is a primary text link"
      />
    ))
  )
  .add(
    "secondary",
    withInfo(infoOptions)(() => (
      <TextLink
        href="https://github.com/Autodesk/hig"
        type="secondary"
        text="This is a secondary text link"
      />
    ))
  );
