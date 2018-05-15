import React from "react";
import { storiesOf } from "@storybook/react";

import TextLink from "../index";

storiesOf("TextLink", module)
  .add("primary", () => (
    <TextLink link="https://www.autodesk.com" type="primary">
      Primary text link
    </TextLink>
  ))
  .add("secondary", () => (
    <TextLink link="https://www.autodesk.com" type="secondary">
      Secondary text link
    </TextLink>
  ));
