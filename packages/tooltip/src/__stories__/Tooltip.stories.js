import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "@hig/button";
import Tooltip from "../index";
import infoOptions from "./infoOptions";

storiesOf("Tooltip", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [Button]
  })(() => (
    <Tooltip anchorPoint="top-center" content="Testing tooltip">
      <Button title="Open Tooltip" />
    </Tooltip>
  ))
);
