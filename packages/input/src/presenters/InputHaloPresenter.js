import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes";

import stylesheet from "./InputHaloPresenter.stylesheet";
import { availableVariants } from "../constants";

function InputHaloPresenter({
  children,
  hasFocus,
  hasHover,
  isDisabled,
  variant
}) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(
          { isDisabled, hasFocus, hasHover, variant },
          themeData
        );

        return (
          <div className={css(styles.wrapper)}>
            {children}
            <div className={css(styles.halo)} />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

InputHaloPresenter.propTypes = {
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isDisabled: PropTypes.bool,
  variant: PropTypes.oneOf(availableVariants)
};

export default InputHaloPresenter;
