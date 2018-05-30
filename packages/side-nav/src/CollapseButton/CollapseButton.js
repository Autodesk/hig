import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";
import { ThemeContext } from "@hig/themes";

import "./collapse-button.scss";

/** @todo Consider replacing with an IconButton */
export default class CollapseButton extends Component {
  static propTypes = {
    /** Presents the icon in a minimized state: caret pointing right */
    minimized: PropTypes.bool,
    /** Called when element is clicked */
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {},
    minimized: false
  };

  render() {
    const { minimized, onClick } = this.props;
    const classes = themeClass =>
      cx(themeClass, "hig__side-nav__module__collapse-button", {
        "hig__side-nav__module__collapse-button--collapsed": minimized
      });

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          /** @todo replace with a semantic HTML tag */
          <div
            className={classes(themeClass)}
            onClick={onClick}
            role="button"
            tabIndex={0}
          >
            <Icon name={iconNames.CARET} size={iconSizes.PX_24} />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
