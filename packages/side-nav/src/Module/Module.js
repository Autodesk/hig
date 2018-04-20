import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";
import { ThemeContext } from "@hig/themes";
import CollapseButton from "../CollapseButton";

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
    /** Called when clicking on the title */
    onClick: PropTypes.func,
    /** Called when hovering over the title */
    onMouseOver: PropTypes.func,
    /** A label for rendering this Module */
    title: PropTypes.string.isRequired,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  }

  static defaultProps = {
    minimized: false,
    onClick: () => {},
    onMouseOver: () => {},
    target: "_self",
  }

  _renderExternalLinkIcon = () => {
    return this.props.target === "_blank" && (
      <Icon name={iconNames.EXTERNAL_LINK} size={iconSizes.PX_24} />
    );
  }

  render() {
    const { children, icon, link, title, target, active, activeChildren, onClick, onMouseOver } = this.props;
    const classes = (themeClass) => cx(
      themeClass,
      "hig__side-nav__module"
    );

    const linkClasses = (themeClass) => cx(
      themeClass,
      "hig__side-nav__module__link",
      {
        "hig__side-nav__module__link--active": active,
        "hig__side-nav__module__link--active-children": activeChildren
      }
    );

    const submodulesClasses = cx(
      "hig__side-nav__module__submodules",
      {
        "hig__side-nav__module__submodules--no-icon": !icon
      }
    );

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={classes(themeClass)}
            onMouseOver={onMouseOver}
          >
            <div className="hig__side-nav__module__row">
              <a className={linkClasses(themeClass)}
                href={link}
                onClick={onClick}
                target={target}
              >
                <div className="hig__side-nav__module__link__icon">{icon}</div>
                <div className="hig__side-nav__module__link__title">{title}</div>
                <div className="hig__side-nav__module__link__external-link-icon">
                  {this._renderExternalLinkIcon()}
                </div>
              </a>
              {
                this.props.children && (
                  <CollapseButton minimized={this.props.minimized} />
                )
              }
            </div>
            {
              !this.props.minimized && (
                <div className={submodulesClasses}>
                  {children}
                </div>
              )
            }
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
