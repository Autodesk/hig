import React from "react";
import PropTypes from "prop-types";
import { CloseSUI, CloseXsUI } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import { ControlBehavior } from "@hig/behaviors";
import { cx, css } from "emotion";
import stylesheet from "./Tab.stylesheet";

export default class TabCloseButtonPresenter extends React.Component {
  static propTypes = {
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
    stylesheet: PropTypes.func
  };

  render() {
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
    } = this.props;

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
          onMouseUp: handleMouseUp
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
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  className={cx(css(styles.button), className)}
                  tabIndex="-1"
                  onClick={handleClick}
                  disabled={disabled}
                  title="close"
                >
                  <CloseIcon />
                </button>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </ControlBehavior>
    );
  }
}
