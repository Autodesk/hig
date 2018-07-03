import React from "react";
import { H3 } from "@hig/typography";
import Example from "./Example";
import InlineCode from "./InlineCode";

function Role(props) {
  return (
    <div style={{ display: "flex", marginBottom: props.basics.SPACINGS.XL }}>
      <div style={{ flex: "1 1 0" }}>
        <H3>
          <InlineCode>{props.role}</InlineCode>
        </H3>
      </div>
      <div style={{ flex: "1 1 0" }}>{<Example {...props} />}</div>
    </div>
  );
}

export default Role;
