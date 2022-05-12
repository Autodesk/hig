import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";
import { cx, css } from "emotion";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

const ButtonPresenter = (props) => {
  const { stylesheet: customStylesheet, ...otherProps } = props;
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
            ...props,
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
};

ButtonPresenter.displayName = "ButtonPresenter";

ButtonPresenter.propTypes = {
  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes.func,
};

export default ButtonPresenter;
