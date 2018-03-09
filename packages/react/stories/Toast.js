import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Toast, Text } from "../src/hig-react";

storiesOf("Toast", module).add("default", () => (
  <Toast onDismiss={action("Toast dismissed")}>
    <Text>Who wants toast??</Text>
  </Toast>
));
