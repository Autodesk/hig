import React from "react";
import { Button as VanillaButton } from "hig-vanilla";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Button from "../index";

storiesOf("Button", module).add(
  "default, with event handlers",
  withInfo()(() => (
    <Button
      title={text("Title", "Button Text")}
      onBlur={action("onBlur")}
      onClick={action("onClick")}
      onFocus={action("onFocus")}
      onHover={action("onHover")}
      disabled={boolean("Disabled", false)}
      link={text("Link", "https://www.autodesk.com/")}
      target={select(
        "Target",
        ["_self", "_blank", "_parent", "_top"],
        "_blank"
      )}
      size={select("Size", VanillaButton.AvailableSizes, "standard")}
      type={select("Type", VanillaButton.AvailableTypes, "primary")}
      width={select("Width", VanillaButton.AvailableWidths, "shrink")}
      icon={text("Icon", "settings")}
    />
  ))
);
