import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";
import CollapseButton from "../../CollapseButton";
import ExternalLinkIcon from "../../presenters/ExternalLinkIcon";

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
    /** Called when hovering over the title */
    onMouseOver: PropTypes.func,
    /** A label for rendering this Module */
    title: PropTypes.string.isRequired,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"])
  };

  static defaultProps = {
    minimized: false,
    onClickCollapseButton: () => {},
    onClickTitle: () => {},
    onMouseOver: () => {},
    target: "_self"
  };

  _renderExternalLinkIcon = () =>
    this.props.target === "_blank" && <ExternalLinkIcon />;

  render() {
    const {
      children,
      icon,
      link,
      title,
      target,
      active,
      activeChildren,
      onClickTitle,
      onMouseOver
    } = this.props;
    const classes = themeClass => cx(themeClass, "hig__side-nav__module");

    const linkClasses = themeClass =>
      cx(themeClass, "hig__side-nav__module__link", {
        "hig__side-nav__module__link--active": active,
        "hig__side-nav__module__link--active-children": activeChildren
      });

    const submodulesClasses = cx("hig__side-nav__module__submodules", {
      "hig__side-nav__module__submodules--no-icon": !icon
    });

    const Wrapper = link ? "a" : "div";

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div className={classes(themeClass)} onMouseOver={onMouseOver}>
            <div className="hig__side-nav__module__row">
              <Wrapper
                className={linkClasses(themeClass)}
                href={link}
                onClick={onClickTitle}
                target={target}
              >
                <div className="hig__side-nav__module__link__icon">{icon}</div>
                <div className="hig__side-nav__module__link__title">
                  {title}
                </div>
                <div className="hig__side-nav__module__link__external-link-icon">
                  {this._renderExternalLinkIcon()}
                </div>
              </Wrapper>
              {this.props.children && (
                <CollapseButton
                  minimized={this.props.minimized}
                  onClick={this.props.onClickCollapseButton}
                />
              )}
            </div>
            {!this.props.minimized && (
              <div className={submodulesClasses}>{children}</div>
            )}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
