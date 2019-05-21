import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./WrapperPresenter.stylesheet";
import { availableVariants } from "../constants";

function WrapperPresenter(props) {
  const {
    children,
    hasFocus,
    hasHover,
    isDisabled,
    stylesheet: customStylesheet,
    variant
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          { isDisabled, hasFocus, hasHover, variant },
          resolvedRoles
        );
        const cssStyles = customStylesheet
          ? customStylesheet(
              styles,
              props,
              resolvedRoles,
              metadata.colorSchemeId
            )
          : styles;

        return <div className={css(cssStyles.wrapper)}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

WrapperPresenter.propTypes = {
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isDisabled: PropTypes.bool,
  stylesheet: PropTypes.func,
  variant: PropTypes.oneOf(availableVariants)
};

export default WrapperPresenter;
