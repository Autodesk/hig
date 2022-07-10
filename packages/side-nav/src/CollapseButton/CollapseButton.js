import React, { Component } from "react";
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
export default class CollapseButton extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /** Presents the icon in a minimized state: caret pointing right */
    minimized: PropTypes.bool,
    /** Called when element is clicked */
    onClick: PropTypes.func,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    minimized: false,
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const {
      minimized,
      onClick,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const { handleClick, handleKeyDown } = this.createEventHandlers(onClick);

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => (
          <div
            aria-pressed={!minimized}
            className={cx([
              css(
                stylesheet(
                  { minimized, stylesheet: customStylesheet, ...this.props },
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
  }
}
