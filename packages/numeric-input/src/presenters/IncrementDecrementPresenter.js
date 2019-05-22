import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { CaretUp24, CaretDown24 } from "@hig/icons";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./IncrementDecrementPresenter.stylesheet";
import { availableVariants } from "../constants";

export default function IncrementDecrementPresenter(props) {
  const {
    disabled,
    hasFocus,
    hasHover,
    // TODO
    // onBlur,
    // onFocus,
    // onMouseEnter,
    // onMouseLeave,
    increment,
    decrement,
    stylesheet: customStylesheet,
    variant
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          { isDisabled: disabled, hasFocus, hasHover, variant },
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

        return (
          <div className={css(cssStyles.scrollers)}>
            <button onClick={increment} className={css(cssStyles.button)}>
              <CaretUp24 className={css(cssStyles.caret)} />
            </button>
            <button onClick={decrement} className={css(cssStyles.button)}>
              <CaretDown24 className={css(cssStyles.caret)} />
            </button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

IncrementDecrementPresenter.propTypes = {
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  // TODO
  //   onBlur: PropTypes.func,
  //   onFocus: PropTypes.func,
  //   onMouseEnter: PropTypes.func,
  //   onMouseLeave: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  stylesheet: PropTypes.func,
  variant: PropTypes.oneOf(availableVariants)
};
