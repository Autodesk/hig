import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs/react";
import { Toast } from "../src/hig-react";

storiesOf("Toast", module).add("default", () => (
  <Toast onDismiss={action("Toast dismissed")} status={text("Status")}>
    {text("Children", "Who wants toast?")}
  </Toast>
));
