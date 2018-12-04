import React from "react";
import { storiesOf } from "@storybook/react";
import { Settings24 } from "@hig/icons";

import IconButton from "../index";

storiesOf("IconButton", module)
  .add("default", () => (
    <IconButton type="primary" title="Icon button" icon={<Settings24 />} />
  ))
  .add("with link", () => (
    <IconButton
      type="primary"
      title="Icon button"
      link="http://www.autodesk.com"
      icon={<Settings24 />}
    />
  ));
