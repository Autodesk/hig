import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchAdapter from '../../../../adapters/GlobalNav/SideNav/NewSearchAdapter';

class Search extends Component {
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string
  }

  static defaultProps = {

  }

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

    this._setValue(event.target.value);
  };

  showClearIcon = () => {
    this.setState({ clearIconVisible: true });
  }

  hideClearIcon = () => {
    this.setState({ clearIconVisible: false });
  }

  handleClearIconClick = event => {
    this._setValue('');

    if (this.props.onInput) {
      this.props.onInput(event);
    }
  }

  setNativeEl = nativeEl => {
    this.nativeEl = nativeEl;
  };

  _setValue(value) {
    if (this.state.controlled) {
      if (this.nativeEl) {
        this.nativeEl.forceNextReset();
        this.setState({ value: this.state.value });
      }
    } else {
      this.setState({ value: value });
    }
  }

  render() {
    return (
      <SearchAdapter
        ref={this.setNativeEl}
        {...this.props}
        value={this.getRenderedValue()}
        onInput={this.handleInput}
        onBlur={this.hideClearIcon}
        onFocus={this.showClearIcon}
        clearIconVisible={this.state.clearIconVisible}
        onClearIconClick={this.handleClearIconClick}
      />
    );
  }
}

export default Search;