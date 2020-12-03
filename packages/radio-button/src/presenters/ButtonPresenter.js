import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";
import { cx, css } from "emotion";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

export default class ButtonPresenter extends Component {
  static propTypes = {
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  render() {
    const { stylesheet: customStylesheet, ...otherProps } = this.props;
    const { className } = otherProps;
    const radioButtonWrapperClassName = createCustomClassNames(
      className,
      "radio-button-wrapper"
    );

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet,
              ...this.props
            },
            resolvedRoles,
            metadata.colorSchemeId
          );
          return (
            <span
              className={cx(
                css(styles.radioButtonWrapper),
                radioButtonWrapperClassName
              )}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
