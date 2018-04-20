import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";
import { ThemeContext } from "@hig/themes";

import "./submodule.scss";

export default class Submodule extends Component {
  static propTypes = {
    /** Indicates this submodule is currently active */
    active: PropTypes.bool,
    /** URL to navigate to when clicking this submodule */
    link: PropTypes.string,
    /** Called when clicking on the submodule */
    onClick: PropTypes.func,
    /** Called when hovering over the submodule */
    onMouseOver: PropTypes.func,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
    /** Text to render */
    title: PropTypes.string,
  }

  _renderExternalLinkIcon = () => {
    return this.props.target === "_blank" && (
      <Icon name={iconNames.EXTERNAL_LINK} size={iconSizes.PX_16} />
    );
  }

  render() {
    const { active, title, link, onClick, onMouseOver, target } = this.props;

    const classes = (themeClass) => cx(
      themeClass,
      "hig__side-nav__submodule",
      {
        "hig__side-nav__submodule--active": active
      }
    );

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <a
            className={classes(themeClass)}
            href={link}
            target={target}
            onClick={onClick}
            onMouseOver={onMouseOver}
          >
            {title}
            {this._renderExternalLinkIcon()}
          </a>
        )}
      </ThemeContext.Consumer>
    );
  }
}
