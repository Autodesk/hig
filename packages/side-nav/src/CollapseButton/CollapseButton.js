import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Caret24 } from "@hig/icons";
import { ThemeContext } from "@hig/themes";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";

import "./collapse-button.scss";

/**
 * @todo Replace with an `IconButton` once it's themeable
 * @todo Deprecate `minimized` prop, and replace it with "pressed" for ARIA consistency.
 * Also, this button shouldn't be concerned with the minimized state of its parent components.
 */
export default class CollapseButton extends Component {
  static propTypes = {
    /** Presents the icon in a minimized state: caret pointing right */
    minimized: PropTypes.bool,
    /** Called when element is clicked */
    onClick: PropTypes.func
  };

  static defaultProps = {
    minimized: false
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const { minimized, onClick } = this.props;
    const { handleClick, handleKeyDown } = this.createEventHandlers(onClick);
    const classes = themeClass =>
      cx(themeClass, "hig__side-nav__module__collapse-button", {
        "hig__side-nav__module__collapse-button--collapsed": minimized
      });

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            aria-pressed={!minimized}
            className={classes(themeClass)}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
          >
            <Caret24 />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
