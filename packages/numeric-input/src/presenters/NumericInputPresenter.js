import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { CaretUp24, CaretDown24, CaretDownSUI, CaretUpSUI } from "@hig/icons";
import Input from "@hig/input";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./NumericInputPresenter.stylesheet";
import { availableVariants } from "../constants";

export default function NumericInputPresenter(props) {
  const {
    disabled,
    hasFocus,
    hasHover,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    stylesheet: customStylesheet,
    variant,
    ...otherProps
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

        const CaretUpIcon =
          metadata.densityId === "medium-density" ? CaretUp24 : CaretUpSUI;

        const CaretDownIcon =
          metadata.densityId === "medium-density" ? CaretDown24 : CaretDownSUI;

        return (
          <div>
            <Input
              className={css(cssStyles.input)}
              disabled={disabled}
              onBlur={onBlur}
              onFocus={onFocus}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              {...otherProps}
            />
            <CaretUpIcon />
            <CaretDownIcon />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

NumericInputPresenter.propTypes = {
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  stylesheet: PropTypes.func,
  variant: PropTypes.oneOf(availableVariants)
};

