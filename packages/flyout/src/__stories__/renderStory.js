/* eslint-disable react/prop-types */
import React from "react";
import Flyout from "../index";
import getKnobs from "./getKnobs";

function Wrapper({ children }) {
  return (
    <div
      style={{
        display: "flex",
        height: "300px",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
}

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <Wrapper>
      <Flyout {...otherProps}>{children}</Flyout>
    </Wrapper>
  );
}
