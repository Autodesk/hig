import React from "react";
import { storiesOf } from "@storybook/react";

import AvatarBundle from "../index";

storiesOf("AvatarBundle", module).add("default", () => (
  <AvatarBundle size="large" />
));
