import React, { Component } from 'react';
import TextFieldAdapter from '../../../adapters/TextFieldAdapter.js';

export default class TextField extends Component {
  constructor(props) {
    super(props);

    const controlled = this.props.value === undefined ? false : true;

    this.state = {
      value: this.getDefaultValue(),
      controlled
    };
  }

  getDefaultValue() {
    const { defaultValue, value } = this.props;

    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return 'foo-bar';
    }
  }

  getRenderedValue() {
    const { value } = this.props;

    if (value !== undefined) {
      return value;
    } else {
      return this.state.value;
    }
  }

  handleInput = event => {
    if (this.props.onInput) {
      this.props.onInput(event);
    }

    if (this.state.controlled) {
      if (this.textFieldEl) {
        this.textFieldEl.forceNextReset();
        this.setState({ value: this.state.value });
      }
    } else {
      this.setState({ value: event.target.value });
    }
  };

  setTextFieldEl = textFieldEl => {
    this.textFieldEl = textFieldEl;
  };

  render() {
    return (
      <TextFieldAdapter
        ref={this.setTextFieldEl}
        {...this.props}
        value={this.getRenderedValue()}
        onInput={this.handleInput}
      />
    );
  }
}
