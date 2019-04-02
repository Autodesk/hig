import React, { Component } from "react";
import { ThemeContext } from "@hig/theme-context";
import { css } from "emotion";

import stylesheet from "./stylesheet";

export default class ButtonPresenter extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            this.props,
            resolvedRoles,
            metadata.colorSchemeId
          );
          return <span className={css(styles.radioButtonWrapper)} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}
