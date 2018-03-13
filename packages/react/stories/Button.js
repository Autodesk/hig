import React from "react";
import { Button as VanillaButton } from "hig-vanilla";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs/react";
import { Button } from "../src/hig-react";
import arrayToObject from "../.storybook/helpers/arrayToObject";

storiesOf("Button", module).add("default, with event handlers", () => (
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
      arrayToObject(["_self", "_blank", "_parent", "_top"]),
      "_blank"
    )}
    size={select(
      "Size",
      arrayToObject(VanillaButton.AvailableSizes),
      "standard"
    )}
    type={select(
      "Type",
      arrayToObject(VanillaButton.AvailableTypes),
      "primary"
    )}
    width={select(
      "Width",
      arrayToObject(VanillaButton.AvailableWidths),
      "shrink"
    )}
    icon={text("Icon", "settings")}
  />
));
