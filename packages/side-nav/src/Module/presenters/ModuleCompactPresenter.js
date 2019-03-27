import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import { memoizeCreateButtonEventHandlers } from "@hig/utils";
import stylesheet from "./stylesheet";

export default class ModuleCompact extends Component {
  static propTypes = {
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
    onMouseOver: PropTypes.func
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  render() {
    const { icon, onClickTitle, onFocus, onMouseOver } = this.props;
    const { handleClick, handleKeyDown } = this.createEventHandlers(
      onClickTitle
    );

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(this.props, resolvedRoles);

          return (
            <div
              className={css(styles.module)}
              onFocus={onFocus}
              onMouseOver={onMouseOver}
            >
              <div className={css(styles.row)}>
                <div
                  className={css(styles.link)}
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                  role="button"
                  tabIndex={0}
                >
                  <div className={css(styles.icon)}>{icon}</div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
