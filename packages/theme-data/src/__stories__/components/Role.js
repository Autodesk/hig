import React from "react";
import PropTypes from "prop-types";
import { H3 } from "@hig/typography";
import { ThemeContext } from "@hig/themes";
import Example from "./Example";
import InlineCode from "./InlineCode";

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
            <H3>
              <InlineCode>{props.role}</InlineCode>
            </H3>
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
