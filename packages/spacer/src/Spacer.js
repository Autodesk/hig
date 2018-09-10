import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/themes";
import { AVAILABLE_SPACINGS } from "@hig/theme-data-poc";
import stylesheet from "./stylesheet";

export default class Spacer extends Component {
  static propTypes = {
    /** Used for passing custom values to the spacer, in lieu of a fixed amount */
    size: PropTypes.string,
    /** Sets the size of the spacer */
    spacing: PropTypes.oneOf(AVAILABLE_SPACINGS)
  };

  static defaultProps = {
    spacing: "m"
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ themeData }) => {
          const styles = stylesheet(this.props, themeData);

          return <div className={css(styles.spacer)} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}
