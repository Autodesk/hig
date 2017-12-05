import Interface from 'interface.json';
import Core from '_core.js';
import './timestamp.scss';
import Template from './timestamp.html';

/**
 * Creates a timestamp
 *
 * @class
 */

class Timestamp extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  setTimestamp(timestamp) {
    this.el.textContent = this._calculateTimestamp(timestamp);
  }

  _pluralize = (word, count) => (count === 1 ? word : `${word}s`);

  _calculateTimestamp = (timestamp) => {
    const asSeconds = timestamp; // TODO: handle future timestamps, or bad input?
    const nowAsSeconds = new Date().valueOf() / 1000;

    const timeDifference = nowAsSeconds - asSeconds;
    let distance;
    let timePassed;

    if (timeDifference < 60 * 60) {
      // 1 hour
      distance = Math.round(timeDifference / 60);
      timePassed = `${distance} ${this._pluralize('minute', distance)}`;
    } else if (timeDifference < 60 * 60 * 24) {
      // 1 day
      distance = Math.round(timeDifference / (60 * 60));
      timePassed = `${distance} ${this._pluralize('hour', distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * 7) {
      // 1 week
      distance = Math.round(timeDifference / (60 * 60 * 24));
      timePassed = `${distance} ${this._pluralize('day', distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * (365 / 12)) {
      // 1 month
      distance = Math.round(timeDifference / (60 * 60 * 24 * 7));
      timePassed = `${distance} ${this._pluralize('week', distance)}`;
    } else if (timeDifference < 60 * 60 * 24 * 30 * 12) {
      // # 1 year
      distance = Math.round(timeDifference / (60 * 60 * 24 * (365 / 12)));
      timePassed = `${distance} ${this._pluralize('month', distance)}`;
    }

    return `${timePassed} ago`;
  };
}

Timestamp._interface = Interface.basics.Timestamp;
Timestamp._defaults = {};

export default Timestamp;
