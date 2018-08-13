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
            marginBottom: themeData["DENSITY.SPACINGS.XL"],
            borderTop: `${themeData["BASICS.BORDER_WIDTHS.S"]} solid ${
              themeData["COLOR_SCHEME.DIVIDER.DIM_COLOR"]
            }`,
            paddingTop: themeData["DENSITY.SPACINGS.M"]
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
