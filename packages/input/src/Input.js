import React, { Component } from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";
import { ThemeContext } from "@hig/themes";
import { css } from "emotion";

import stylesheet from "./stylesheet";
import FocusBehavior from "./behaviors/FocusBehavior";
import HoverBehavior from "./behaviors/HoverBehavior";

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool
  };

  render() {
    const { value, disabled } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ themeData }) => (
          <HoverBehavior>
            {({ hasHover, onMouseEnter, onMouseLeave }) => (
              <FocusBehavior>
                {({ hasFocus, onFocus, onBlur }) => {
                  const styles = stylesheet(
                    { isDisabled: disabled, hasFocus, hasHover },
                    themeData
                  );
                  console.log(styles);

                  return (
                    <div className={css(styles.inputWrapper)}>
                      <input
                        className={css(styles.input)}
                        value={value}
                        disabled={disabled}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      />
                      <div className={css(styles.halo)} />
                    </div>
                  );
                }}
              </FocusBehavior>
            )}
          </HoverBehavior>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default polyfill(Input);
