import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Timestamp extends Component {
  _pluralize = (word, count) => (count === 1 ? word : `${word}s`);

  _calculateTimestamp = timestamp => {
    const asSeconds = Date.parse(timestamp) / 1000; // TODO: handle future timestamps, or bad input?
    const nowAsSeconds = new Date().valueOf() / 1000;

    const timeDifference = nowAsSeconds - asSeconds;
    let distance;
    let timePassed;

    if (timeDifference < 60) {
      distance = Math.round(timeDifference);
      timePassed = `${distance} ${this._pluralize("second", distance)}`;
    } else if (timeDifference < 60 * 60) {
      // 1 hour
      distance = Math.round(timeDifference / 60);
      timePassed = `${distance} ${this._pluralize("minute", distance)}`;
    } else if (timeDifference < 60 * 60 * 24) {
      // 1 day
      distance = Math.round(timeDifference / (60 * 60));
      timePassed = `${distance} ${this._pluralize("hour", distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * 7) {
      // 1 week
      distance = Math.round(timeDifference / (60 * 60 * 24));
      timePassed = `${distance} ${this._pluralize("day", distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * (365 / 12)) {
      // 1 month
      distance = Math.round(timeDifference / (60 * 60 * 24 * 7));
      timePassed = `${distance} ${this._pluralize("week", distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * 30 * 12) {
      // # 1 year
      distance = Math.round(timeDifference / (60 * 60 * 24 * (365 / 12)));
      timePassed = `${distance} ${this._pluralize("month", distance)}`;
    }

    return `${timePassed} ago`;
  };
  render() {
    return (
      <div className="hig__timestamp">
        {this._calculateTimestamp(this.props.timestamp)}
      </div>
    );
  }
}

Timestamp.PropTypes = {
  /**
   * Timestamp for notification (ISO date string or date instance)
   */
  timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
};
