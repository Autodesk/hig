import React from "react";
import { storiesOf } from "@storybook/react";
import { Toast } from "../src/hig-react";

storiesOf("Toast", module).add("default", () => (
  <Toast>Who wants toast??</Toast>
));
