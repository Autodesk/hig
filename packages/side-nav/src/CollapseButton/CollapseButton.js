import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { CaretDownMUI, CaretDownSUI } from "@hig/icons";
import ThemeContext from "@hig/theme-context";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";
import stylesheet from "./stylesheet";

/**
 * @todo Replace with an `IconButton` once it's themeable
 * @todo Deprecate `minimized` prop, and replace it with "pressed" for ARIA consistency.
 * Also, this button shouldn't be concerned with the minimized state of its parent components.
 */
const CollapseButton = (props) => {
  const createEventHandlers = memoizeCreateButtonEventHandlers();
  const {
    minimized,
    onClick,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const { handleClick, handleKeyDown } = createEventHandlers(onClick);

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => (
        <div
          aria-pressed={!minimized}
          className={cx([
            css(
              stylesheet(
                { minimized, stylesheet: customStylesheet, ...props },
                resolvedRoles
              )
            ),
            className,
          ])}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {metadata.densityId === "high-density" ? (
            <CaretDownSUI />
          ) : (
            <CaretDownMUI />
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

CollapseButton.displayName = "CollapseButton";

CollapseButton.propTypes = {
  /** Presents the icon in a minimized state: caret pointing right */
  minimized: PropTypes.bool,
  /** Called when element is clicked */
  onClick: PropTypes.func,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
};

CollapseButton.defaultProps = {
  minimized: false,
};

export default CollapseButton;
