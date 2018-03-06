import React from "react";
import { Button as VanillaButton } from "hig-vanilla";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs/react";
import { Button } from "../src/hig-react";
import arrayToObject from "../.storybook/arrayToObject";

storiesOf("Button", module)
  .add("default, with event handlers", () => (
    <Button
      title={text("Title", "Button Text")}
      onBlur={action("onBlur")}
      onClick={action("onClick")}
      onFocus={action("onFocus")}
      onHover={action("onHover")}
      disabled={boolean("Disabled", false)}
      link={text("Link")}
      target={select(
        "Target",
        arrayToObject(["_self", "_blank", "_parent", "_top"])
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
      icon={text("Icon")}
    />
  ))
  .add("disabled", () => <Button title="Button Text" disabled />)
  .add("with icon", () => <Button title="Button Text" icon="settings" />);

storiesOf("Button/Link", module)
  .add("default", () => (
    <Button title="Button Text" link="https://www.autodesk.com/" />
  ))
  .add("target", () => (
    <Button
      title="Button Text"
      link="https://www.autodesk.com/"
      target="_blank"
    />
  ));

storiesOf("Button/Sizes", module)
  .add("small", () => <Button title="Button Text" size="small" />)
  .add("standard", () => <Button title="Button Text" size="standard" />)
  .add("large", () => <Button title="Button Text" size="large" />);

storiesOf("Button/Types", module)
  .add("primary", () => <Button title="Button Text" type="primary" />)
  .add("secondary", () => <Button title="Button Text" type="secondary" />)
  .add("flat", () => <Button title="Button Text" type="flat" />);

storiesOf("Button/Widths", module)
  .add("shrink", () => <Button title="Button Text" width="shrink" />)
  .add("grow", () => <Button title="Button Text" width="grow" />);
