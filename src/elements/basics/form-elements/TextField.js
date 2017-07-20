import React, { Component } from 'react';
import TextFieldAdapter from '../../../adapters/TextField.js';

export default class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };

    this.handleInput = this.handleInput.bind(this);
    this.setTextFieldEl = this.setTextFieldEl.bind(this);
  }

  handleInput(event) {
    // // Call callback if provided
    // if (this.props.onInput) {
    //   this.props.onInput(...arguments);
    // }

    // // Prevent user interaction from changing text field value
    // const currentValue = this.props.value || this.state.value;
    // // console.log('setting current value', this.textFieldEl)
    // this.textFieldEl.setValue(currentValue);

    // // Update state with new value
    // this.setState({
    //   value: this.props.value || event.target.value
    // });
  }

  setTextFieldEl(textFieldEl) {
    this.textFieldEl = textFieldEl;
  }

  render() {
    return (
      <TextFieldAdapter ref={this.setTextFieldEl}
        {...this.props}
        value={this.props.value || this.state.value}
        onInput={this.handleInput}
      />
    );
  }
}
