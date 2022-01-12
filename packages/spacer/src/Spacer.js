import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import { css, cx } from "emotion";

import stylesheet from "./Spacer.stylesheet";
import { AVAILABLE_SIZES } from "./availableSizes";

const Spacer = props => {
  const { size, spacing, stylesheet: customStylesheet, ...otherProps } = props;
  const { className } = otherProps;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { size, spacing, stylesheet: customStylesheet },
          resolvedRoles
        );
        return <div className={cx([className, css(styles.spacer)])} />;
      }}
    </ThemeContext.Consumer>
  );
};

Spacer.displayName = "Spacer";

Spacer.propTypes = {
  /** Used for passing custom values to the spacer, in lieu of a fixed amount */
  size: PropTypes.string,
  /** Sets the size of the spacer */
  spacing: PropTypes.oneOf(AVAILABLE_SIZES),
  /** Adds custom/overriding styles */
  stylesheet: PropTypes.func
};

Spacer.defaultProps = {
  spacing: "m"
};

export default Spacer;
