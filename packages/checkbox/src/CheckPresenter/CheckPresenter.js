import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import icons from "@hig/icons";

import "./CheckPresenter.scss";

export default class CheckPresenter extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
    /**
     * Prevents user actions on the checkbox
     */
    disabled: PropTypes.bool,
    /**
     * Sets indeterminate state for checkbox
     */
    indeterminate: PropTypes.bool
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false
  };

  render() {
    const { checked, disabled, indeterminate } = this.props;

    const iconClasses = cx([
      "hig__checkbox__wrapper",
      {
        "hig__checkbox__wrapper--checked": checked,
        "hig__checkbox__wrapper--indeterminate": indeterminate,
        "hig__checkbox__wrapper--disabled": disabled
      }
    ]);

    return (
      <span className={iconClasses}>
        <span
          className="hig__checkbox__wrapper__check"
          dangerouslySetInnerHTML={{ __html: icons["check-white-24"] }}
        />
        <span
          className="hig__checkbox__wrapper__check--indeterminate"
          dangerouslySetInnerHTML={{
            __html: icons["checkmark-indeterminate-16"]
          }}
        />
        <span
          className="hig__checkbox__wrapper__check--disabled"
          dangerouslySetInnerHTML={{ __html: icons["check-disabled-16"] }}
        />
      </span>
    );
  }
}
