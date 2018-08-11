import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/themes";

import stylesheet from "./InputHaloPresenter.stylesheet";
import { availableTypes } from "../constants";

function InputHaloPresenter({
  isDisabled,
  hasFocus,
  hasHover,
  type,
  children
}) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(
          { isDisabled, hasFocus, hasHover, type },
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
  isDisabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  type: PropTypes.oneOf(availableTypes),
  children: PropTypes.node
};

export default InputHaloPresenter;
