import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import stylesheet from "./stylesheet";

export default class ProgressBar extends Component {
  static propTypes = {
    /**
     * A number from 0 to 100 representing the percent the delayed operation has completed
     */
    percentComplete: PropTypes.number,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  render() {
    const {
      percentComplete,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    const { className } = otherProps;
    const innerWrapperClassNames = createCustomClassNames(
      className,
      "progress-bar"
    );
    const fillClassNames = createCustomClassNames(className, "fill");
    const polygonClassNames = createCustomClassNames(className, "polygon");

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { percentComplete, stylesheet: customStylesheet },
            resolvedRoles
          );
          return (
            <div
              className={cx(css(styles.wrapper), className)}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percentComplete}
            >
              <div
                className={cx(css(styles.progressBar), innerWrapperClassNames)}
              >
                <div
                  className={cx(css(styles.progressBarFill), fillClassNames)}
                />
                <svg
                  width="3px"
                  height="4px"
                  viewBox="0 0 3 4"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <polygon
                    className={cx(css(styles.polygon), polygonClassNames)}
                    id="end-right"
                    points="0 0 2.68 0 1 4 0 4"
                  />
                </svg>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
