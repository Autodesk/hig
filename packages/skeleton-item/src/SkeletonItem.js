import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ThemeContext } from "@hig/themes";

import "./skeleton-item.scss";

export default class SkeletonItem extends Component {
  static propTypes = {
    /** Sets height of the skeleton item */
    height: PropTypes.string,
    /** Sets max width of the skeleton item */
    maxWidth: PropTypes.string,
    /** Sets spacing below the skeleton item */
    marginBottom: PropTypes.string
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <div
            className={cx("hig__skeleton-item", themeClass)}
            style={{
              maxWidth: this.props.maxWidth,
              marginBottom: this.props.marginBottom,
              height: this.props.height
            }}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}
