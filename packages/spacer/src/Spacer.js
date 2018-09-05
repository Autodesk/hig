import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";
//import { export as AVAILABLE_SPACINGS } from "@hig/theme-data/src/basics/spacings";

import "./spacer.scss";
import stylesheet from "./stylesheet";

export default class Spacer extends Component {
  static propTypes = {
    /** Sets display type for element  */
    display: PropTypes.oneOf(["block", "inline-block"]),
    /** Used for passing custom values to the spacer, in lieu of a fixed amount */
    size: PropTypes.string,
    /** Sets the size of the spacer */
    //spacing: PropTypes.oneOf(AVAILABLE_SPACINGS)
    spacing: PropTypes.oneOf(["xxs", "s", "m", "l", "xl", "xxl"])
  };

  static defaultProps = {
    spacing: "m",
    display: "flex"
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ themeData }) => {
          const styles = stylesheet(this.props, themeData);

          return (
            <div
              className={cx("hig__spacer", themeData)}
              style={styles.spacer}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
