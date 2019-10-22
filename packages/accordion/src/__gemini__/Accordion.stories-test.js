import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion, { indicatorPositions } from "../index";

storiesOf("Accordion", module)
  .add("default", () => <Accordion label="foo">bar</Accordion>)
  .add("indicatorInRight", () => (
    <Accordion label="foo" indicatorPosition={indicatorPositions.RIGHT}>
      bar
    </Accordion>
  ));
