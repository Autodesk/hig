import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers,
} from "@hig/utils";
import stylesheet from "./stylesheet";

const ModuleCompact = (props) => {
  const createEventHandlers = memoizeCreateButtonEventHandlers();

  const {
    icon,
    onClickTitle,
    onFocus,
    onMouseOver,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const { handleClick, handleKeyDown } = createEventHandlers(onClickTitle);
  const rowClassName = createCustomClassNames(className, "row");
  const linkClassName = createCustomClassNames(className, "link");
  const iconClassName = createCustomClassNames(className, "icon");

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { stylesheet: customStylesheet, ...props },
          resolvedRoles
        );

        return (
          <div
            className={cx([css(styles.module), className])}
            onFocus={onFocus}
            onMouseOver={onMouseOver}
          >
            <div className={cx([css(styles.row), rowClassName])}>
              <div
                className={cx([css(styles.link), linkClassName])}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
              >
                <div className={cx([css(styles.icon), iconClassName])}>
                  {icon}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

ModuleCompact.displayName = "ModuleCompact";

ModuleCompact.propTypes = {
  /** Indicates this module is currently active */
  /* eslint-disable react/no-unused-prop-types */
  active: PropTypes.bool,
  /** Indicates a nested submodule is currently active */
  /* eslint-disable react/no-unused-prop-types */
  activeChildren: PropTypes.bool,
  /** An instance of @hig/icon */
  icon: PropTypes.node.isRequired,
  /** Called when clicking on the title */
  onClickTitle: PropTypes.func,
  /** Called when link is focused  */
  onFocus: PropTypes.func,
  /** Called when hovering over the icon */
  onMouseOver: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

export default ModuleCompact;
