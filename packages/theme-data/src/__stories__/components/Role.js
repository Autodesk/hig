import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/themes";
import Example from "./Example";
import InlineCode from "./InlineCode";
import Text from "./Text";

function Role(props) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => (
        <div
          style={{
            display: "flex",
            marginBottom: themeData["density.spacings.xl"],
            borderTop: `${themeData["basics.borderWidths.s"]} solid ${
              themeData["colorScheme.divider.dimColor"]
            }`,
            paddingTop: themeData["density.spacings.m"]
          }}
        >
          <div style={{ flex: "1 1 0" }}>
            <Text color={Text.DEFAULT_TEXT_COLOR}>
              <InlineCode>{props.role}</InlineCode>
            </Text>
          </div>
          <div style={{ flex: "1 1 0" }}>{<Example {...props} />}</div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

Role.propTypes = {
  role: PropTypes.string
};

export default Role;
