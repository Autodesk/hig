import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import RichText, { _AVAILABLE_SIZES } from "../index";

storiesOf("RichText", module).add("default", () => (
  <RichText size={select("Size", _AVAILABLE_SIZES.concat(null))}>
    The RichText component lets me include any React children, including:
    <ul>
      <li>
        <strong>Any old HTML tag</strong>
      </li>
      <li>React components</li>
    </ul>
  </RichText>
));
