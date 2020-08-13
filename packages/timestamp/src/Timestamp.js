import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

export default class Timestamp extends Component {
  static propTypes = {
    /**
     * If you want to pluralize the elapsed time unit
     * If "true" then it adds an "s" to the end of the time unit
     */
    plural: PropTypes.bool,
    /**
     * ISO date string
     */
    timestamp: PropTypes.string,
    /**
     * An object that allows for localization of all the time words used
     * By default the object property name is the same as the property value
     * Property names: second, minute, hour, day, week, month, year, ago
     */
    timeDescriptors: PropTypes.shape({
      second: PropTypes.string,
      minute: PropTypes.string,
      hour: PropTypes.string,
      day: PropTypes.string,
      week: PropTypes.string,
      month: PropTypes.string,
      year: PropTypes.string,
      ago: PropTypes.string
    }),
    /**
     * Adds custom/overriding styles
     */
    stylesheet: PropTypes.func,
    /**
     * If you want a space between words
     */
    wordSpace: PropTypes.bool
  };

  static defaultProps = {
    plural: true,
    timeDescriptors: {
      second: "second",
      minute: "minute",
      hour: "hour",
      day: "day",
      week: "week",
      month: "month",
      year: "year",
      ago: "ago"
    },
    wordSpace: true
  };

  humanizeTimestamp = timestamp => {
    const { plural, timeDescriptors, wordSpace } = this.props;
    const asSeconds = Date.parse(timestamp) / 1000; // TODO: handle future timestamps, or bad input?
    const nowAsSeconds = new Date().valueOf() / 1000;

    const timeDifference = nowAsSeconds - asSeconds;
    let distance;
    let ellapsedDescriptor;

    if (timeDifference < 60) {
      distance = Math.round(timeDifference);
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.second, distance)
        : timeDescriptors.second;
    } else if (timeDifference < 60 * 60) {
      // 1 hour
      distance = Math.round(timeDifference / 60);
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.minute, distance)
        : timeDescriptors.minute;
    } else if (timeDifference < 60 * 60 * 24) {
      // 1 day
      distance = Math.round(timeDifference / (60 * 60));
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.hour, distance)
        : timeDescriptors.hour;
    } else if (timeDifference < 60 * 60 * 24 * 7) {
      // 1 week
      distance = Math.round(timeDifference / (60 * 60 * 24));
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.day, distance)
        : timeDescriptors.day;
    } else if (timeDifference < 60 * 60 * 24 * (365 / 12)) {
      // 1 month
      distance = Math.round(timeDifference / (60 * 60 * 24 * 7));
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.week, distance)
        : timeDescriptors.week;
    } else if (timeDifference < 60 * 60 * 24 * 30 * 12) {
      // # 1 year
      distance = Math.round(timeDifference / (60 * 60 * 24 * (365 / 12)));
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.month, distance)
        : timeDescriptors.month;
    } else {
      // More than 1 year
      distance = Math.round(timeDifference / (60 * 60 * 24 * 365));
      ellapsedDescriptor = plural
        ? pluralize(timeDescriptors.year, distance)
        : timeDescriptors.year;
    }

    return wordSpace
      ? `${distance} ${ellapsedDescriptor} ${timeDescriptors.ago}`
      : `${distance}${ellapsedDescriptor}${timeDescriptors.ago}`;
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
