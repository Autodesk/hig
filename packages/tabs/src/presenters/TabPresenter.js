import React from "react";
import PropTypes from "prop-types";
import Typography from "@hig/typography";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import { cx, css } from "emotion";
import stylesheet from "./Tab.stylesheet";
import TabCloseButtonPresenter from "./TabCloseButtonPresenter";
import {
  variants,
  orientations,
  AVAILABLE_VARIANTS,
  AVAILABLE_ORIENTATIONS
} from "../constants";

export default function TabPresenter({
  active,
  hasFocus,
  hasHover,
  isPressed,
  label,
  icon,
  disabled,
  closable,
  variant,
  orientation,
  showDivider,
  onBlur,
  onFocus,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  onClose,
  stylesheet: customStylesheet,
  ...otherProps
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          {
            active,
            hasFocus,
            hasHover,
            isPressed,
            label,
            icon,
            variant,
            orientation,
            disabled,
            closable,
            stylesheet: customStylesheet
          },
          resolvedRoles,
          metadata
        );

        const { className } = otherProps;

        const showIcon = variant !== variants.UNDERLINE && icon;
        const showClose = variant !== variants.UNDERLINE && closable;
        const showHalo = variant !== variants.CANVAS;

        const buttonClassName = createCustomClassNames(
          otherProps.className,
          "button"
        );

        const iconClassName = createCustomClassNames(
          otherProps.className,
          "icon"
        );

        const labelClassName = createCustomClassNames(
          otherProps.className,
          "label"
        );

        const closeButtonClassName = createCustomClassNames(
          otherProps.className,
          "close-button"
        );

        const haloClassName = createCustomClassNames(
          otherProps.className,
          "halo"
        );

        const dividerClassName = createCustomClassNames(
          otherProps.className,
          "divider"
        );

        return (
          <li className={cx(css(styles.tab), className)}>
            <div
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={onClick}
              onKeyDown={onKeyDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              disabled={disabled}
              tabIndex={disabled ? "-1" : "0"}
              role="button"
              className={cx(css(styles.buttonWrapper), buttonClassName)}
            >
              <div className={css(styles.contentWrapper)}>
                {showIcon && (
                  <span className={cx(css(styles.icon), iconClassName)}>
                    {icon}
                  </span>
                )}
                <Typography className={cx(css(styles.label), labelClassName)}>
                  {label}
                </Typography>
                {showClose && (
                  <TabCloseButtonPresenter
                    className={cx(
                      css(styles.closeButton),
                      closeButtonClassName
                    )}
                    onClick={onClose}
                    stylesheet={customStylesheet}
                  />
                )}
              </div>
              {showHalo && (
                <div className={cx(css(styles.halo), haloClassName)} />
              )}
              {showDivider && (
                <div className={cx(css(styles.divider), dividerClassName)} />
              )}
            </div>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TabPresenter.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  closable: PropTypes.bool,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  showDivider: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isPressed: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClose: PropTypes.func,
  stylesheet: PropTypes.func
};

TabPresenter.defaultProps = {
  variant: variants.UNDERLINE,
  label: "",
  orientation: orientations.HORIZONTAL
};
