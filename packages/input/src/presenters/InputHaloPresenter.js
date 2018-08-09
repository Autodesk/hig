import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "../../../themes/build";

import stylesheet from "./InputHaloPresenter.stylesheet";

function InputHaloPresenter({ isDisabled, hasFocus, hasHover, children }) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => {
        const styles = stylesheet(
          { isDisabled, hasFocus, hasHover },
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
  children: PropTypes.node
};

export default InputHaloPresenter;
