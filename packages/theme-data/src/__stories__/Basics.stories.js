import React from "React";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const storybook = storiesOf("TextLink", module);

storybook.add(
  description,
  withInfo(infoOptions)(() => (
    <Role role={"BASICS.COLORS.AUTODESK_BLUE_500"} schema={{ type: "color" }} />
  ))
);
