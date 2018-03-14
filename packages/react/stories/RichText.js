import React from "react";
import { storiesOf } from "@storybook/react";
import { RichText } from "../src/hig-react";

storiesOf("RichText", module).add("default", () => (
  <RichText>
    The RichText component lets me include any React children, including:
    <ul>
      <li>
        <strong>Any old HTML tag</strong>
      </li>
      <li>React components</li>
    </ul>
  </RichText>
));
