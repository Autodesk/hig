import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import {
  CaretRightMUI,
  CaretRightSUI,
  OperatorMinusSUI,
  OperatorMinusXsUI,
  OperatorPlusSUI,
  OperatorPlusXsUI
} from "@hig/icons";

import {
  indicators,
  AVAILABLE_INDICATORS,
  AVAILABLE_INDICATOR_POSITIONS
} from "../constants";
import stylesheet from "../stylesheet";

export default class HeaderPresenter extends Component {
  static propTypes = {
    hasFocus: PropTypes.bool,
    hasHover: PropTypes.bool,
    isPressed: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    label: PropTypes.string.isRequired,
    indicator: PropTypes.oneOf(AVAILABLE_INDICATORS),
    indicatorPosition: PropTypes.oneOf(AVAILABLE_INDICATOR_POSITIONS),
    collapsed: PropTypes.bool,
    disabled: PropTypes.bool,
    stylesheet: PropTypes.func,
    children: PropTypes.node
  };

  render() {
    const {
      hasFocus,
      hasHover,
      isPressed,
      onBlur,
      onClick,
      onFocus,
      onHover,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      stylesheet: customStylesheet,
      label,
      indicator,
      indicatorPosition,
      collapsed,
      disabled,
      children,
      ...otherProps
    } = this.props;

    const { className } = otherProps;
    const headerClassName = createCustomClassNames(className, "header");
    const indicatorClassName = createCustomClassNames(
      className,
      "header-indicator"
    );
    const labelClassName = createCustomClassNames(className, "header-label");

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              hasFocus,
              hasHover,
              isPressed,
              indicator,
              indicatorPosition,
              collapsed,
              disabled,
              stylesheet: customStylesheet
            },
            resolvedRoles,
            metadata
          );

          const highDensity = metadata.densityId === "high-density";
          let Indicator = highDensity ? CaretRightSUI : CaretRightMUI;
          if (indicator === indicators.OPERATOR) {
            Indicator = highDensity ? OperatorPlusXsUI : OperatorPlusSUI;
            if (!collapsed) {
              Indicator = highDensity ? OperatorMinusXsUI : OperatorMinusSUI;
            }
          }

          return (
            <button
              className={cx(css(styles.header), headerClassName)}
              onBlur={onBlur}
              onClick={onClick}
              onFocus={onFocus}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseOver={onHover}
              onMouseUp={onMouseUp}
              disabled={disabled}
              tabIndex={disabled ? "-1" : "0"}
            >
              <Indicator
                className={cx(css(styles.indicator), indicatorClassName)}
              />
              <div className={cx(css(styles.label), labelClassName)}>
                {label}
              </div>
            </button>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
