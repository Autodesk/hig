import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import stylesheet from "./stylesheet";

export default class Spacer extends Component {
  static propTypes = {
    /** Sets display type for element  */
    display: PropTypes.oneOf(["block", "flex", "inline-block"]),
    /** Used for passing custom values to the spacer, in lieu of a fixed amount */
    size: PropTypes.string,
    /** Sets the size of the spacer */
    spacing: PropTypes.oneOf(["xxs", "s", "m", "l", "xl", "xxl"])
  };

  static defaultProps = {
    spacing: "m",
    display: "flex"
  };

  render() {
    const { display, size, spacing } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ themeData }) => {
          const styles = stylesheet(this.props, themeData);

          return (
            <div
              className={cx("hig__spacer-v1", themeData)}
              display={display}
              size={size}
              spacing={spacing}
              style={styles.spacer}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
