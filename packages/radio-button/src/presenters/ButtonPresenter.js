import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./ButtonPresenter.scss";

export default class ButtonPresenter extends Component {
  static propTypes = {
    /**
     * Checks the radio button
     */
    checked: PropTypes.bool,
    /**
     * Prevents user actions on the radio button
     */
    disabled: PropTypes.bool
  };

  static defaultProps = {
    checked: false,
    disabled: false
  };

  render() {
    const { checked, disabled } = this.props;

    const iconClasses = cx([
      "hig__radio-button__wrapper",
      {
        "hig__radio-button__wrapper--checked": checked,
        "hig__radio-button__wrapper--disabled": disabled
      }
    ]);

    return (
      <span className={iconClasses}>
        <span className="hig__radio-button__wrapper__button" />
        <span className="hig__radio-button__wrapper__button--disabled" />
      </span>
    );
  }
}
