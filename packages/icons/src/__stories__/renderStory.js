import React from "react";
import { Body } from "@hig/typography";
import * as Icons from "../index";

function Wrapper({ children }) {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };
  return <div style={styles}>{children}</div>;
}
function InnerWrapper({ children }) {
  return (
    <div
      style={{
        paddingRight: "5px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "250px",
        marginBottom: "8px"
      }}
    >
      {children}
    </div>
  );
}
function Spacer() {
  return (
    <div
      style={{
        width: "8px"
      }}
    />
  );
}
function IconStory({ size }) {
  const set = Icons.sets.find(isonSet => isonSet.size === size);
  return (
    <Wrapper>
      {set.iconNames.map(name => {
        const Icon = Icons[`${name}${size}`];
        return (
          <InnerWrapper key={name}>
            <Icon key={name} />
            <Spacer />
            <Body>{name}</Body>
          </InnerWrapper>
        );
      })}
    </Wrapper>
  );
}
export default function renderStory(props) {
  const { children, ...otherProps } = props;
  return <IconStory {...otherProps}>{children}</IconStory>;
}
