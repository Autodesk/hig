import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/hig-react";

storiesOf("Button", module)
  .add("default, with event handlers", () => (
    <Button
      title="Button Text"
      onBlur={action("onBlur")}
      onClick={action("onClick")}
      onFocus={action("onFocus")}
      onHover={action("onHover")}
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

storiesOf("Button/sizes", module)
  .add("small", () => <Button title="Button Text" size="small" />)
  .add("standard", () => <Button title="Button Text" size="standard" />)
  .add("large", () => <Button title="Button Text" size="large" />);

storiesOf("Button/types", module)
  .add("primary", () => <Button title="Button Text" types="primary" />)
  .add("secondary", () => <Button title="Button Text" types="secondary" />)
  .add("flat", () => <Button title="Button Text" types="flat" />);

storiesOf("Button/widths", module)
  .add("shrink", () => <Button title="Button Text" width="shrink" />)
  .add("grow", () => <Button title="Button Text" width="grow" />);
