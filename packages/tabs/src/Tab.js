import React from "react";
import PropTypes from "prop-types";
import { ControlBehavior } from "@hig/behaviors";
import TabPresenter from "./presenters/TabPresenter";

const Tab = props => {
  const {
    active,
    closable,
    disabled,
    icon,
    label,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;

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
    return render({ ...props });
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
          stylesheet={customStylesheet}
        />
      )}
    </ControlBehavior>
  );
};

Tab.displayName = "Tab";

Tab.propTypes = {
  /**
   * DEPRECATED: Use the activeTabIndex or defaultActiveTabIndex prop on the Tabs
   * component instead.
   *
   * Specify if the tab is active
   * If more than one tabs are marked as active, the first one will take effect
   */
  active: PropTypes.bool,
  /**
   * Specify if the tab will have a close button
   * Only works when varient prop of parent Tabs is set to "box" or "canvas"
   */
  closable: PropTypes.bool,
  /**
   * Specify if the tab is disabled
   */
  disabled: PropTypes.bool,
  /**
   * A @hig/icon element
   * Icon will only be displayed when varient prop of parent Tabs is set to "box" or "canvas"
   */
  icon: PropTypes.node,
  /**
   * Sets the label of a tab
   */
  label: PropTypes.string,
  /**
   * Function to modify the component's styles
   */
  stylesheet: PropTypes.func
};

Tab.defaultProps = {
  active: false,
  disabled: false,
  closable: false
};

export default Tab;
