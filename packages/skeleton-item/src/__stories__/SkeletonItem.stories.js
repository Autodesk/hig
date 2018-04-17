import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import SkeletonItem from "../SkeletonItem";

storiesOf("SkeletonItem", module).add(
  "default",
  withInfo()(() => (
    <SkeletonItem
      maxWidth={text("Max Width", "1280px")}
      marginBottom={text("Margin Bottom", "24px")}
    />
  ))
);
