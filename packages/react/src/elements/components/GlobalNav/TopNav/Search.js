import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchAdapter from "../../../../adapters/GlobalNav/TopNav/SearchAdapter";
import Option from "../../FormElements/Option";

class Search extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    )
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
      showOptions: false,
      value: this.getDefaultValue(),
      controlled
    };
  }

  onInput = event => {
    this.props.onSearchInput({ value: event.target.value });
    this.showOptions();
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

  hideOptions = () => {
    this.setState({ showOptions: false });
  };

  showOptions = () => {
    this.setState({ showOptions: true });
  };

  hideClearIcon = () => {
    this.setState({ clearIconVisible: false });
  };

  showClearIcon = () => {
    this.setState({ clearIconVisible: true });
  };

  handleClearIconClick = () => {
    this._setValue("");
    this.props.onSearchInput({ value: "" });
    this.setState({ focusedOptionIndex: undefined });
  };

  handleKeydown = event => {
    switch (event.keyCode) {
      case 40:
        this._arrowDown();
        break;
      case 38:
        this._arrowUp();
        break;
      case 13:
        this._submitInput();
        break;
      default:
        console.log("no focused option");
    }
    console.log("keycode", event.keyCode);
  };

  _setValue(value) {
    if (this.state.controlled) {
      this.setState({ value: this.state.value });
    } else {
      this.setState({ value });
    }
  }

  _arrowDown() {
    if (
      this.state.focusedOptionIndex === undefined ||
      this.state.focusedOptionIndex >= this.props.options.length - 1
    ) {
      this.setState({ focusedOptionIndex: 0 });
    } else {
      const focusedOptionIndex = this.state.focusedOptionIndex + 1;
      this.setState({ focusedOptionIndex });
    }
  }

  _arrowUp() {
    if (
      this.state.focusedOptionIndex === undefined ||
      this.state.focusedOptionIndex <= 0
    ) {
      const focusedOptionIndex = this.props.options.length - 1;
      this.setState({ focusedOptionIndex });
    } else {
      const focusedOptionIndex = this.state.focusedOptionIndex - 1;
      this.setState({ focusedOptionIndex });
    }
  }

  _submitInput() {
    this.props.onSearchInput({
      value: this.props.options[this.state.focusedOptionIndex].label
    });
    this.hideOptions();
  }

  render() {
    return (
      <SearchAdapter
        {...this.props}
        value={this.getRenderedValue()}
        onInput={this.onInput}
        showOptions={this.props.options.length > 0 && this.state.showOptions}
        onBlur={this.hideClearIcon}
        onFocus={this.showClearIcon}
        showClearIcon={this.state.clearIconVisible}
        onClearIconClick={this.handleClearIconClick}
        onClickOutside={this.handleClearIconClick}
        onKeydown={this.handleKeydown}
      >
        {this.props.options.length > 0
          ? this.props.options.map((option, index) => (
              <Option
                key={option.value}
                focused={index === this.state.focusedOptionIndex}
                {...option}
                // selected={option.value === selectedOption.value}
                onClick={() => {
                  console.log("onClick");
                }}
                onHover={() => {
                  console.log("onHover");
                }}
              />
            ))
          : null}
      </SearchAdapter>
    );
  }
}

export default Search;
