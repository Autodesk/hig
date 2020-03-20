import React, { Component } from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";
import TabPresenter from "./presenters/TabPresenter";

export default class Tab extends Component {
  static propTypes = {
    /**
     * DEPRECATED: Use the activeTabIndex or defaultActiveTabIndex prop on the Tabs
     * component instead.
     *
     * Specify if the tab is active
     * If more than one tabs are marked as active, the first one will take effect
     */
    active: PropTypes.bool,
    /**
     * Sets the label of a tab
     */
    label: PropTypes.string,
    /**
     * A @hig/icon element
     * Icon will only be displayed when varient prop of parent Tabs is set to "box" or "canvas"
     */
    icon: PropTypes.node,
    /**
     * Specify if the tab is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Specify if the tab will have a close button
     * Only works when varient prop of parent Tabs is set to "box" or "canvas"
     */
    closable: PropTypes.bool
  };

  static defaultProps = {
    active: false,
    disabled: false,
    closable: false
  };

  render() {
    const {
      active,
      label,
      icon,
      disabled,
      closable,
      ...otherProps
    } = this.props;

    const { className } = otherProps;

    const {
      variant,
      orientation,
      showDivider,
      onMouseEnter,
      onMouseLeave,
      handleClick,
      handleKeyDown,
      onClose,
      render
    } = otherProps;

    if (render) {
      return render({ ...this.props });
    }

    return (
      <ControlBehavior onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {({
          hasFocus,
          hasHover,
          isPressed,
          onBlur,
          onFocus,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }) => (
          <TabPresenter
            active={active}
            disabled={disabled}
            closable={closable}
            hasFocus={hasFocus}
            hasHover={hasHover}
            isPressed={isPressed}
            label={label}
            icon={icon}
            variant={variant}
            orientation={orientation}
            showDivider={showDivider}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onClose={onClose}
            className={className}
          />
        )}
      </ControlBehavior>
    );
  }
}
