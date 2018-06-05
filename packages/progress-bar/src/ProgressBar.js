import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./progress-bar.scss";

/**
 * @param {Number} percent, an integer or float
 * @returns {Integer}
 */
export const renderedBarWidth = percent => {
  const percentageWidth = parseInt(percent, 10);
  if (!percentageWidth) {
    return null;
  }

  if (percentageWidth >= 100) {
    return 101;
  }
  return percentageWidth;
};

export default class ProgressBar extends Component {
  static propTypes = {
    /**
     * A number from 0 to 100 representing the percent the delayed operation has completed
     */
    percentComplete: PropTypes.number
  };

  fillBarStyles() {
    const barWidth = renderedBarWidth(this.props.percentComplete);
    return barWidth ? { width: `${barWidth}%` } : {};
  }

  render() {
    const { percentComplete } = this.props;
    const progressBarClasses = cx("hig__progress-bar", {
      "hig__progress-bar--determinate": percentComplete
    });

    return (
      <div
        className={progressBarClasses}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentComplete}
      >
        <div className="hig__progress-bar__bar" style={this.fillBarStyles()}>
          <div className="hig__progress-bar__fill" />
          <svg
            width="3px"
            height="4px"
            viewBox="0 0 3 4"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              id="end-right"
              points="0 0 2.68 0 1 4 0 4"
              fill="#0ED3BE"
            />
          </svg>
        </div>
      </div>
    );
  }
}
