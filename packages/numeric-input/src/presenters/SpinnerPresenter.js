import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CaretUpMUI, CaretUpSUI, CaretDownMUI, CaretDownSUI } from "@hig/icons";
import stylesheet from "./stylesheet";

const variantTypes = ["line", "box"];

export default class SpinnerPresenter extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    variant: PropTypes.oneOf(variantTypes),
    increment: PropTypes.func,
    decrement: PropTypes.func
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const {
      disabled,
      onBlur,
      onClick,
      onChange,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      onFocus,
      increment,
      decrement,
      variant,
      ...otherProps
    } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              disabled,
              variant
            },
            resolvedRoles,
            metadata.densityId
          );
          const UpIcon =
            metadata.densityId === "medium-density" ? CaretUpMUI : CaretUpSUI;

          const DownIcon =
            metadata.densityId === "medium-density"
              ? CaretDownMUI
              : CaretDownSUI;

          const ifKeyIsEnter = action => event => {
            if (event.key === "Enter") {
              action();
            }
          };
          return (
            <div className={css(styles.spinnerWrapper)}>
              <div className={css(styles.boxWrapper)}>
                <span
                  className={css(styles.spinner)}
                  onBlur={onBlur}
                  onClick={increment}
                  onFocus={onFocus}
                  onChange={onChange}
                  onMouseDown={onMouseDown}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onKeyDown={ifKeyIsEnter(increment)}
                >
                  <UpIcon className={css(styles.iconUp)} />
                </span>
                <span
                  className={css(styles.spinner)}
                  onBlur={onBlur}
                  onClick={decrement}
                  onFocus={onFocus}
                  onChange={onChange}
                  onMouseDown={onMouseDown}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onKeyDown={ifKeyIsEnter(decrement)}
                >
                  <DownIcon className={css(styles.iconDown)} />
                </span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
