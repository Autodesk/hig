import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { CaretUp16, CaretDown16 } from "@hig/icons";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./Spinner.stylesheet";

export default function Spinner(props) {
  const {
    isDisabled,
    hasFocus,
    increment,
    decrement,
    stylesheet: customStylesheet
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet({ isDisabled, hasFocus }, resolvedRoles);
        const cssStyles = customStylesheet
          ? customStylesheet(
              styles,
              props,
              resolvedRoles,
              metadata.colorSchemeId
            )
          : styles;

        const ifKeyIsEnter = action => event => {
          if (event.key === "Enter") {
            action();
          }
        };

        return (
          <div className={css(cssStyles.scrollers)}>
            <div
              disabled={isDisabled}
              onClick={increment}
              onKeyDown={ifKeyIsEnter(increment)}
              className={css(cssStyles.button)}
              role="button"
            >
              <CaretUp16 className={css(cssStyles.caret)} />
            </div>
            <div
              disabled={isDisabled}
              onClick={decrement}
              onKeyDown={ifKeyIsEnter(decrement)}
              className={css(cssStyles.button)}
              role="button"
            >
              <CaretDown16 className={css(cssStyles.caret)} />
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

Spinner.propTypes = {
  isDisabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  stylesheet: PropTypes.func
};
