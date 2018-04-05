import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "../index";

storiesOf("Avatar", module).add("default", () => (
  <Avatar name="Jon Snow" size="large-48" />
));
