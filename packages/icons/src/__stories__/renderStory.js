import React from "react";
import Typography from "@hig/typography";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import * as Icons from "../index";

function Wrapper({ children }) {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
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
        marginBottom: "8px",
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
        width: "8px",
      }}
    />
  );
}

export function IconStory({ size, color }) {
  const set = Icons.sets.find((isonSet) => isonSet.size === size);

  return (
    <Wrapper>
      {set.iconNames.map((name) => {
        const Icon = Icons[`${name}${size}`];
        return (
          <InnerWrapper key={name}>
            <Icon key={name} color={color} />
            <Spacer />
            <Typography type="body">{`${name}${size}`}</Typography>
          </InnerWrapper>
        );
      })}
    </Wrapper>
  );
}

export default function renderStory(props) {
  const { children, theme, ...otherProps } = props;
  return (
    <KnobbedThemeProvider>
      <IconStory {...otherProps}>{children}</IconStory>
    </KnobbedThemeProvider>
  );
}
