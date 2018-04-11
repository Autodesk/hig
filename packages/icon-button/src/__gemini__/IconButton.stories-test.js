import React from "react";
import { storiesOf } from "@storybook/react";

import IconButton from "../index";

storiesOf("IconButton", module).add("default", () => (
  <IconButton
    type="primary"
    title="Icon button"
    link="http://www.autodesk.com"
    disabled={false}
    icon="settings"
  />
));
