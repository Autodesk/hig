import React from "react";
import PropTypes from "prop-types";
import { CloseSUI, CloseXsUI } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import { ControlBehavior } from "@weave-design/behaviors";
import { cx, css } from "emotion";
import stylesheet from "./Tab.stylesheet";

const TabCloseButtonPresenter = (props) => {
  const {
    disabled,
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    onClick,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    onClick(event);
  }

  return (
    <ControlBehavior
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {({
        hasFocus,
        hasHover,
        isPressed,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
      }) => (
        <ThemeContext.Consumer>
          {({ resolvedRoles, metadata }) => {
            const styles = stylesheet(
              { hasFocus, hasHover, isPressed, stylesheet: customStylesheet },
              resolvedRoles,
              metadata
            );
            const { className } = otherProps;
            const CloseIcon =
              metadata.densityId === "medium-density" ? CloseSUI : CloseXsUI;

            return (
              <button
                className={cx(css(styles.button), className)}
                disabled={disabled}
                onBlur={handleBlur}
                onClick={handleClick}
                onFocus={handleFocus}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                tabIndex="-1"
                title="close"
                type="button"
              >
                <CloseIcon />
              </button>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </ControlBehavior>
  );
};

TabCloseButtonPresenter.displayName = "TabCloseButtonPresenter";

TabCloseButtonPresenter.propTypes = {
  /**
   * Prevents user actions on the button
   */
  disabled: PropTypes.bool,
  /**
   * Called when user moves focus away from the button
   */
  onBlur: PropTypes.func,
  /**
   * Called when user clicks the button
   */
  onClick: PropTypes.func,
  /**
   * Called when user moves focus onto the button
   */
  onFocus: PropTypes.func,
  /**
   * Called when mouse is pressed over the button
   */
  onMouseDown: PropTypes.func,
  /**
   * Called when mouse begins to move over the button
   */
  onMouseEnter: PropTypes.func,
  /**
   * Called when mouse stops moving over the button
   */
  onMouseLeave: PropTypes.func,
  /**
   * Called when mouse is released over the button
   */
  onMouseUp: PropTypes.func,
  /**
   * Function to modify the component's styles
   */
  stylesheet: PropTypes.func,
};

export default TabCloseButtonPresenter;
