import React from "react";
import { storiesOf } from "@storybook/react";

import TextLink from "../index";

storiesOf("TextLink", module)
  .add("default", () => (
    <TextLink link="https://www.autodesk.com">
      Primary text link
    </TextLink>
  ));
