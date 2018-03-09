import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs/react";
import { Toast, Text } from "../src/hig-react";
import arrayToObject from "../.storybook/helpers/arrayToObject";

storiesOf("Toast", module).add("default", () => (
  <Toast
    onDismiss={action("Toast dismissed")}
    status={select(
      "Status",
      arrayToObject(["primary", "success", "danger", "warning"])
    )}
  >
    <Text>{text("Children", "Who wants toast?")}</Text>
  </Toast>
));
