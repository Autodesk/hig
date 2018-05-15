import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import { types, AVAILABLE_TYPES } from "./types";
import classNames from "./classNames";
import "./text-link.scss";

const wrapperModifiersByType = {
  [types.PRIMARY]: classNames.wrapperPrimary,
  [types.SECONDARY]: classNames.wrapperSecondary
};

export default class TextLink extends Component {
  static propTypes = {
    /** Text content of the link */
    children: PropTypes.string,
    /** The href to link to. Note that this was previously 'href' in the version distributed with hig-react. */
    link: PropTypes.string.isRequired,
    /** Called when link is clicked */
    onClick: PropTypes.func,
    /** Indicates the style of link */
    type: PropTypes.oneOf(AVAILABLE_TYPES)
  };

  static defaultProps = {
    type: types.PRIMARY
  };

  render() {
    const { children, link, onClick, type } = this.props;
    const linkClasses = themeClass =>
      cx(themeClass, classNames.wrapper, wrapperModifiersByType[type]);

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <a href={link} onClick={onClick} className={linkClasses(themeClass)}>
            {children}
          </a>
        )}
      </ThemeContext.Consumer>
    );
  }
}
