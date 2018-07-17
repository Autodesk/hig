import React, { Component } from "react";

export default class FormInput extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="hig__input-button hig__input-button--checkbox">
        {children}
      </div>
    );
  }
}
