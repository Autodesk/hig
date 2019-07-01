import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";

import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./InputPresenter.stylesheet";
import {
  availableTagNames,
  availableVariants,
  tagNames,
  variants
} from "../constants";

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

        let className = css(cssStyles.input);
        const { className: customClassName } = otherProps;
        if (customClassName) {
          className = cx(
            className,
            variant === variants.PLAIN
              ? customClassName
              : customClassName
                  .split(" ")
                  .reduce((acc, cur) => cx(acc, `${cur.trim()}__input`), "")
          );
        }

        const tagNameKey = tagName.toUpperCase();
        const Element = tagNames[tagNameKey];

        return (
          <Element
            {...otherProps}
            className={className}
            disabled={disabled}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
