import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "@hig/button";
import RichText from "@hig/rich-text";
import Flyout from "../index";
import infoOptions from "./infoOptions";

storiesOf("Flyout", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [Button]
  })(() => (
    <Flyout
      anchorPoint="right-top"
      content={
        <RichText>
          <h3>Important flyout information</h3>
          <p>Any content can go in here.</p>
        </RichText>
      }
    >
      <Button title="Open flyout" />
    </Flyout>
  ))
);
