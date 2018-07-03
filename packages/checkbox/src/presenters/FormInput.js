import React, { Component } from "react";
// import cx from "classnames";

import "./FormInput.scss";

export default class FormInput extends Component {
  render() {
    const { children } = this.props;
    // const labelClasses = "fgh";
    // cx(
    //   "hig__input-button__label{{^label}}"
    //   "hig--hidden{{/label}}"
    // );

    return (
      <div className="hig__input-button hig__input-button--checkbox">
      {children}
      </div>
    );
  }
}
