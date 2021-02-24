import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import { css, cx } from "emotion";

import stylesheet from "./Spacer.stylesheet";
import { AVAILABLE_SIZES } from "./availableSizes";

export default class Spacer extends Component {
  static propTypes = {
    /** Used for passing custom values to the spacer, in lieu of a fixed amount */
    size: PropTypes.string,
    /** Sets the size of the spacer */
    spacing: PropTypes.oneOf(AVAILABLE_SIZES),
    /** Adds custom/overriding styles */
    stylesheet: PropTypes.func
  };

  static defaultProps = {
    spacing: "m"
  };

  render() {
    const {
      size,
      spacing,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
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
  }
}
