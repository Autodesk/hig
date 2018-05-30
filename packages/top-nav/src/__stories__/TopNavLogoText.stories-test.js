import React from "react";
import { storiesOf } from "@storybook/react";

import TopNav from "../index";

const storybook = storiesOf("TopNavLogoText", module);

storybook.add("default", () => (
  <TopNav.LogoText>
    AUTODESK <strong>HIG</strong>
  </TopNav.LogoText>
));
