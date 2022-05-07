import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";
import basics from "../../basics";

import Swatch from "./Swatch";
import Value from "./Value";

function getBoxShadowColor(boxShadowBlur, resolvedRoles) {
  const blurHeight = Object.keys(basics.shadows).find(
    (key) => basics.shadows[key].value === boxShadowBlur
  );

  return blurHeight === "lowBlur"
    ? resolvedRoles["colorScheme.shadow.low"]
    : resolvedRoles["colorScheme.shadow.high"];
}

export default function ShadowExample({ value }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const boxShadowColor = getBoxShadowColor(value, resolvedRoles);

        return (
          <div>
            <Swatch boxShadowBlur={value} boxShadowColor={boxShadowColor} />
            <Value>{value}</Value>
            <Value>{boxShadowColor}</Value>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

ShadowExample.propTypes = {
  value: PropTypes.string,
};
