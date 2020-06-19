import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import CollapseButton from "../../CollapseButton";
import TitlePresenter from "./TitlePresenter";
import { targets, AVAILABLE_TARGETS } from "../../targets";
import stylesheet from "./stylesheet";

export default class Module extends Component {
  static propTypes = {
    /** Indicates this module is currently active */
    active: PropTypes.bool,
    /** Indicates a nested submodule is currently active */
    activeChildren: PropTypes.bool,
    /** Zero or more SideNav submodules */
    children: PropTypes.node,
    /** An instance of @hig/icon */
    icon: PropTypes.node,
    /** URL to navigate to when clicking this module */
    link: PropTypes.string,
    /** Indicates whether to display nested submodules */
    minimized: PropTypes.bool,
    /** Called when clicking on the collapse button */
    onClickCollapseButton: PropTypes.func,
    /** Called when clicking on the title */
    onClickTitle: PropTypes.func,
    /** Called when link is focused  */
    onFocus: PropTypes.func,
    /** Called when hovering over the title */
    onMouseOver: PropTypes.func,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    /** A label for rendering this Module */
    title: PropTypes.string.isRequired,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(AVAILABLE_TARGETS)
  };

  static defaultProps = {
    minimized: false,
    target: targets.SELF
  };

  render() {
    const {
      active,
      activeChildren,
      children,
      icon,
      link,
      minimized,
      onClickCollapseButton,
      onClickTitle,
      onFocus,
      onMouseOver,
      stylesheet: customStylesheet,
      target,
      title
    } = this.props;

    const isCollapsible = !!children;
    /**
     * The title should always be focusable, but shouldn't be in
     * the keyboard sequence if the collapse button is rendered.
     */
    const titleTabIndex = isCollapsible ? "-1" : "0";

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { stylesheet: customStylesheet, ...this.props },
            resolvedRoles
          );

          return (
            <div
              className={css(styles.module)}
              onFocus={onFocus}
              onMouseOver={onMouseOver}
            >
              <div className={css(styles.row)}>
                <TitlePresenter
                  active={active}
                  activeChildren={activeChildren}
                  icon={icon}
                  link={link}
                  onClick={onClickTitle}
                  tabIndex={titleTabIndex}
                  target={target}
                  title={title}
                />
                {isCollapsible && (
                  <CollapseButton
                    minimized={minimized}
                    onClick={onClickCollapseButton}
                  />
                )}
              </div>
              {!minimized && (
                <div className={css(styles.submodule)}>{children}</div>
              )}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
