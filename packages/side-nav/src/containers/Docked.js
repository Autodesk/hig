import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./stylesheet";

const Docked = props => {
  const {
    children,
    onMouseLeave,
    onMouseEnter,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          id="surface"
          className={cx([
            css(
              stylesheet(
                {
                  stylesheet: customStylesheet,
                  ...props
                },
                resolvedRoles
              ).docked
            ),
            className
          ])}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

Docked.displayName = "Docked";

Docked.propTypes = {
  /** A SideNav element */
  children: PropTypes.node,
  /** Called when beginning to hover over the container */
  onMouseEnter: PropTypes.func,
  /** Called when no longer hovering over the container */
  onMouseLeave: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};

Docked.defaultProps = {
  onMouseLeave: () => {},
  onMouseEnter: () => {}
};

export default Docked;
