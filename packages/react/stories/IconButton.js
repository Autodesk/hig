import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs/react";
import { IconButton } from "../src/hig-react";
import arrayToObject from "../.storybook/helpers/arrayToObject";

storiesOf("IconButton", module).add("primary", () => (
  <IconButton
    type={select("Type", arrayToObject(["primary", "flat", "transparent"]))}
    title={text("Icon button")}
    link={text("link", "www.autodesk.com")}
    icon={text("icon name", "settings")}
    onClick={action("Clicked")}
    onBlur={() => {
      console.log("onblur");
    }}
    onFocus={() => {
      console.log("focus");
    }}
    onHover={() => {
      console.log("hover");
    }}
  />
));
