import React from "react";
import { sets as iconSets } from "@hig/icons";
import { Body } from "@hig/typography";

import Icon from "../index";

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
  const set = iconSets.find(isonSet => isonSet.size === size);

  return (
    <Wrapper>
      {set.iconNames.map(name => (
        <InnerWrapper key={name}>
          <Icon name={name} key={name} size={size} />
          <Spacer />
          <Body>{name}</Body>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}

export default function renderStory(props) {
  const { children, ...otherProps } = props;

  return <IconStory {...otherProps}>{children}</IconStory>;
}
