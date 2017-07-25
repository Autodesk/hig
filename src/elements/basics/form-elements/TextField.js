/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
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
