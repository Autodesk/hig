import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";
import Example from "./Example";
import InlineCode from "./InlineCode";
import Text from "./Text";

function Role(props) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          style={{
            display: "flex",
            marginBottom: resolvedRoles["density.spacings.extraLarge"],
            borderTop: `${resolvedRoles["basics.borderWidths.small"]} solid ${
              resolvedRoles["colorScheme.text.dim"]
            }`,
            paddingTop: resolvedRoles["density.spacings.medium"]
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
