import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CloseSUI, CloseXsUI } from "@hig/icons";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";

const TagPresenter = (props) => {
  const {
    children,
    disabled,
    hasFocus,
    hasHover,
    isPressed,
    onBlur,
    onClose,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    selected,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className, onClick, onKeyDown } = otherProps;
  const labelWrapperClassName = createCustomClassNames(
    className,
    "label-wrapper"
  );
  const closeWrapperClassName = createCustomClassNames(
    className,
    "close-wrapper"
  );

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const CloseIcon =
          metadata.densityName === "Medium density" ? CloseSUI : CloseXsUI;
        const styles = stylesheet(
          {
            disabled,
            hasFocus,
            hasHover,
            isPressed,
            onClose,
            selected,
            stylesheet: customStylesheet,
          },
          resolvedRoles,
          metadata
        );

        return (
          <div
            {...otherProps}
            className={cx([css(styles?.tag.wrapper), className])}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            role="button"
            tabIndex={0}
          >
            <span
              className={cx([
                css(styles?.tag.labelWrapper),
                labelWrapperClassName,
              ])}
            >
              {children}
            </span>
            {onClose && (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
              <span
                className={cx([
                  css(styles?.tag.closeWrapper),
                  closeWrapperClassName,
                ])}
                onClick={onClose}
              >
                <CloseIcon />
              </span>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

TagPresenter.propTypes = {
  /** The content that goes to the label of the Tag */
  children: PropTypes.node,
  /** Disables the Tag */
  disabled: PropTypes.bool,
  /** Is true if the Tag has focus */
  hasFocus: PropTypes.bool,
  /** Is true if the Tag is hovered */
  hasHover: PropTypes.bool,
  /** Is True if the Tag is pressed */
  isPressed: PropTypes.bool,
  /** Called when the Tag is blurred */
  onBlur: PropTypes.func,
  /** Called when the close icon is clicked or ESC key pressed */
  onClose: PropTypes.func,
  /** Called when the Tag is focused */
  onFocus: PropTypes.func,
  /** Called when Tag is mouse pressed */
  onMouseDown: PropTypes.func,
  /** Called when the cursor enters the Tag */
  onMouseEnter: PropTypes.func,
  /** Called when the cursor leaves the Tag */
  onMouseLeave: PropTypes.func,
  /** Called when Tag is mouse released */
  onMouseUp: PropTypes.func,
  /** Sets the the Tag into selected state */
  selected: PropTypes.bool,
  /** Adds custom/overriding styles */
  stylesheet: PropTypes.func,
};

export default TagPresenter;
