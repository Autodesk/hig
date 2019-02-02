import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./InputPresenter.stylesheet";
import { availableTagNames, availableVariants, tagNames } from "../constants";

export default function InputPresenter(props) {
  const {
    disabled,
    hasFocus,
    hasHover,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    tagName,
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
        const tagNameKey = tagName.toUpperCase();
        const Element = tagNames[tagNameKey];

        return (
          <Element
            className={css(cssStyles.input)}
            disabled={disabled}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...otherProps}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

InputPresenter.propTypes = {
  disabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  stylesheet: PropTypes.func,
  tagName: PropTypes.oneOf(availableTagNames),
  variant: PropTypes.oneOf(availableVariants)
};

InputPresenter.defaultProps = {
  tagName: tagNames.INPUT
};
