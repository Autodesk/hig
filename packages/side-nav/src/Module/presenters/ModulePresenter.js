import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import CollapseButton from "../../CollapseButton";
import TitlePresenter from "./TitlePresenter";
import { targets, AVAILABLE_TARGETS } from "../../targets";

import "./module.scss";

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
      target,
      title
    } = this.props;
    const classes = themeClass => cx(themeClass, "hig__side-nav__module");

    const submodulesClasses = cx("hig__side-nav__module__submodules", {
      "hig__side-nav__module__submodules--no-icon": !icon
    });

    const isCollapsible = !!children;
    /**
     * The title should always be focusable, but shouldn't be in
     * the keyboard sequence if the collapse button is rendered.
     */
    const titleTabIndex = isCollapsible ? "-1" : "0";

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={classes(themeClass)}
            onFocus={onFocus}
            onMouseOver={onMouseOver}
          >
            <div className="hig__side-nav__module__row">
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
            {!minimized && <div className={submodulesClasses}>{children}</div>}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
