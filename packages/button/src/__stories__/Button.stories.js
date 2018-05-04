import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";

import Button, {
  availableSizes,
  availableTargets,
  availableTypes,
  availableWidths
} from "../index";

storiesOf("Button", module).add(
  "default",
  withInfo()(() => (
    <Button
      disabled={boolean("Disabled")}
      link={text("Link", "https://www.autodesk.com")}
      onBlur={action("onBlur")}
      onClick={action("onClick")}
      onFocus={action("onFocus")}
      onHover={action("onHover")}
      size={select("Size", availableSizes)}
      target={select("Target", availableTargets)}
      title={text("Title", "Button Title")}
      type={select("Type", availableTypes)}
      width={select("Width", availableWidths)}
    />
  ))
);
