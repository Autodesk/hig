import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

export default class Timestamp extends Component {
  static propTypes = {
    /**
     * ISO date string
     */
    timestamp: PropTypes.string,
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func
  };

  humanizeTimestamp = timestamp => {
    const asSeconds = Date.parse(timestamp) / 1000; // TODO: handle future timestamps, or bad input?
    const nowAsSeconds = new Date().valueOf() / 1000;

    const timeDifference = nowAsSeconds - asSeconds;
    let distance;
    let timePassed;

    if (timeDifference < 60) {
      distance = Math.round(timeDifference);
      timePassed = `${distance} ${pluralize("second", distance)}`;
    } else if (timeDifference < 60 * 60) {
      // 1 hour
      distance = Math.round(timeDifference / 60);
      timePassed = `${distance} ${pluralize("minute", distance)}`;
    } else if (timeDifference < 60 * 60 * 24) {
      // 1 day
      distance = Math.round(timeDifference / (60 * 60));
      timePassed = `${distance} ${pluralize("hour", distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * 7) {
      // 1 week
      distance = Math.round(timeDifference / (60 * 60 * 24));
      timePassed = `${distance} ${pluralize("day", distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * (365 / 12)) {
      // 1 month
      distance = Math.round(timeDifference / (60 * 60 * 24 * 7));
      timePassed = `${distance} ${pluralize("week", distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * 30 * 12) {
      // # 1 year
      distance = Math.round(timeDifference / (60 * 60 * 24 * (365 / 12)));
      timePassed = `${distance} ${pluralize("month", distance)}`;
    }

    return `${timePassed} ago`;
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const { stylesheet: customStylesheet, ...otherProps } = this.props;
          const { className } = otherProps;
          const styles = stylesheet(
            { stylesheet: customStylesheet },
            resolvedRoles,
            metadata.colorSchemeId
          );
          return (
            <div className={cx(css(styles.timestamp), className)}>
              {this.humanizeTimestamp(this.props.timestamp)}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
