import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

export default function controlled(FieldAdapter) {
  class ControlledField extends Component {
    static propTypes = {
      defaultValue: PropTypes.string,
      value: PropTypes.string,
      onInput: PropTypes.func
    };

    constructor(props) {
      super(props);

      const controlled = props.value === undefined ? false : true;

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
        return '';
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
        if (this.fieldEl) {
          this.fieldEl.forceNextReset();
          this.setState({ value: this.state.value });
        }
      } else {
        this.setState({ value: event.target.value });
      }
    };

    setFieldEl = FieldEl => {
      this.fieldEl = FieldEl;
    };

    render() {
      return (
        <FieldAdapter
          ref={this.setFieldEl}
          {...this.props}
          value={this.getRenderedValue()}
          onInput={this.handleInput}
        />
      );
    }
  }

  return ControlledField;
}
