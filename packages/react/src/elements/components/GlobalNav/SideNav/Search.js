import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchAdapter from "../../../../adapters/GlobalNav/SideNav/SearchAdapter";

export default class Search extends Component {
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onInput: PropTypes.func
  };

  static defaultProps = {
    onInput: () => {},
    value: undefined,
    defaultValue: undefined
  };

  constructor(props) {
    super(props);

    const controlled = props.value !== undefined;

    this.state = {
      value: this.getDefaultValue(),
      controlled
    };
  }

  onInput = event => {
    this.props.onInput(event);
    const clearIconVisible = event.target.value.length > 0;
    this.setState({ clearIconVisible });
  };

  getDefaultValue() {
    const { defaultValue, value } = this.props;

    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    }
    return "";
  }

  getRenderedValue() {
    const { value } = this.props;

    if (value !== undefined) {
      return value;
    }
    return this.state.value;
  }

  handleClearIconClick = event => {
    this.setState({ clearIconVisible: false });
    this._setValue("");
    this.props.onInput(event);
  };

  _setValue(value) {
    if (this.state.controlled) {
      this.setState({ value: this.state.value });
    } else {
      this.setState({ value });
    }
  }

  render() {
    return (
      <SearchAdapter
        {...this.props}
        value={this.getRenderedValue()}
        onInput={this.onInput}
        clearIconVisible={this.state.clearIconVisible}
        onClearIconClick={this.handleClearIconClick}
      />
    );
  }
}
