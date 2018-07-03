import React from "react";
import { H3 } from "@hig/typography";
import Example from "./Example";

function Role(props) {
  return (
    <div style={{ display: "flex", marginBottom: props.basics.SPACINGS.XL }}>
      <div style={{ flex: "1 1 0" }}>
        <H3>
          <code>{props.role}</code>
        </H3>
      </div>
      <div style={{ flex: "1 1 0" }}>{<Example {...props} />}</div>
    </div>
  );
}

export default Role;
