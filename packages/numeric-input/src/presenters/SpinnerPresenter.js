import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CaretUpMUI, CaretUpSUI, CaretDownMUI, CaretDownSUI } from "@hig/icons";
import { createCustomClassNames } from "@hig/utils";
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
    decrement: PropTypes.func,
    stylesheet: PropTypes.func
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
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    const {className} = otherProps;
    const spinnerWrapperClassName = createCustomClassNames(className, "spinner-wrapper");
    const boxWrapperClassName = createCustomClassNames(className, "box-wrapper");
    const spinnerClassName = createCustomClassNames(className, "spinner");
    const spinnerUpClassName = createCustomClassNames(className, "spinner-icon-up");
    const spinnerDownClassName = createCustomClassNames(className, "spinner-icon-down");

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              disabled,
              variant,
              stylesheet: customStylesheet
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
            <div className={cx(css(styles.spinnerWrapper), spinnerWrapperClassName)}>
              <div className={cx(css(styles.boxWrapper), boxWrapperClassName)}>
                <span
                  className={cx(css(styles.spinner), spinnerClassName)}
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
                  <UpIcon className={cx(css(styles.iconUp), spinnerUpClassName)} />
                </span>
                <span
                  className={cx(css(styles.spinner), spinnerClassName)}
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
                  <DownIcon className={cx(css(styles.iconDown), spinnerDownClassName)} />
                </span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
