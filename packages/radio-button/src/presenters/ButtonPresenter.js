/* eslint react/forbid-prop-types: 0 */

import React, { Component } from "react";
import { ThemeContext } from "@hig/theme-context";
import { cx, css } from "emotion";

import stylesheet from "./stylesheet";

export default class ButtonPresenter extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(this.props, resolvedRoles, metadata.colorSchemeId);
          return (
            <span
              className={cx(
                "radio-button__wrapper",
                css(styles.radioButtonWrapper)
              )}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
