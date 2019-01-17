import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./stylesheet";

export default class ProgressBar extends Component {
  static propTypes = {
    /**
     * A number from 0 to 100 representing the percent the delayed operation has completed
     */
    percentComplete: PropTypes.number
  };

  render() {
    const { percentComplete } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet({ percentComplete }, resolvedRoles);
          return (
            <div
              className={css(styles.wrapper)}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percentComplete}
            >
              <div className={css(styles.progressBar)}>
                <div className={css(styles.progressBarFill)} />
                <svg
                  width="3px"
                  height="4px"
                  viewBox="0 0 3 4"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <polygon
                    className={css(styles.polygon)}
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
