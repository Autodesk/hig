import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ProfileFlyout from "../index";
import infoOptions from "./infoOptions";

storiesOf("ProfileFlyout", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <ProfileFlyout
      image="https://placekitten.com/g/50/50"
      name="David Gonzalez"
      email="gonzalezd@autodesk.com"
    />
  ))
);
