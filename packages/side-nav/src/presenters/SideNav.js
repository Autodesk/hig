import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";
import { names as iconNames } from "@hig/icon";
import IconButton, { types as iconButtonTypes } from "@hig/icon-button";

import "./side-nav.scss";

export default class SideNav extends Component {
  static propTypes = {
    /** Additional content to include below navigation items */
    children: PropTypes.node,
    /** Copyright text to include  */
    copyright: PropTypes.string,
    /** 0 or more SideNav Groups */
    groups: PropTypes.node,
    /** Subtitle at the top of the SideNav */
    headerLabel: PropTypes.string,
    /** An href for the SideNav Subtitle */
    headerLink: PropTypes.string,
    /** 0 or more SideNav Links */
    links: PropTypes.node,
    /** Called when minimize button is clicked */
    onMinimize: PropTypes.func,
    /** Renders a button to minimize the SideNav */
    showMinimizeButton: PropTypes.bool,
    /** Title at the top of the SideNav */
    superHeaderLabel: PropTypes.string,
    /** An href for the SideNav Title */
    superHeaderLink: PropTypes.string
  };

  static defaultProps = {
    onMinimize: () => {},
    showMinimizeButton: false
  };

  render() {
    const {
      children,
      copyright,
      groups,
      headerLabel,
      headerLink,
      links,
      onMinimize,
      showMinimizeButton,
      superHeaderLabel,
      superHeaderLink
    } = this.props;

    const classes = themeClass => cx(themeClass, "hig__side-nav");

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <nav className={classes(themeClass)}>
            <div className="hig__side-nav__overflow">
              <div className="hig__side-nav__headers">
                <h3 className="hig__side-nav__super-header">
                  <a
                    className="hig__side-nav__super-header-link"
                    href={superHeaderLink}
                  >
                    {superHeaderLabel}
                  </a>
                </h3>
                <h4 className="hig__side-nav__header">
                  <a className="hig__side-nav__header-link" href={headerLink}>
                    {headerLabel}
                  </a>
                </h4>
              </div>

              {groups && <div className="hig__side-nav__groups">{groups}</div>}

              {children && (
                <div className="hig__side-nav__slot">{children}</div>
              )}

              {links && <div className="hig__side-nav__links">{links}</div>}

              {copyright && (
                <div className="hig__side-nav__copyright">{copyright}</div>
              )}
            </div>

            {/* <!--SEARCH--> */}

            {showMinimizeButton && (
              <div className="hig__side-nav__minimize">
                <IconButton
                  type={iconButtonTypes.TRANSPARENT}
                  name={iconNames.BACK}
                  title="Minimize"
                  aria-label="Minimize"
                  onClick={onMinimize}
                />
              </div>
            )}
          </nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}
