import React from "react";
import Icon from "../index";
import iconKeys from "./iconKeys";

function Wrapper({ children }) {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "400px"
  };

  return <div style={styles}>{children}</div>;
}

function InnerWrapper({ children }) {
  return <div style={{ paddingRight: "5px" }}>{children}</div>;
}

function IconStory({ size }) {
  const keys = iconKeys[size];

  return (
    <Wrapper>
      {keys.map(name => (
        <InnerWrapper key={name}>
          <Icon name={name} key={name} size={size} />
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}

export default function renderStory(props) {
  const { children, ...otherProps } = props;

  return <IconStory {...otherProps}>{children}</IconStory>;
}
