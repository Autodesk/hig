import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchAdapter from "../../../../adapters/GlobalNav/TopNav/SearchAdapter";
import Option from "../../FormElements/Option";

export default class Search extends Component {
  static defaultProps = {
    onBlur: () => {},
    onClearIconClick: () => {},
    onClickOutside: () => {},
    onFocus: () => {},
    onInput: () => {},
    onKeydown: () => {},
    onOptionSelect: () => {},
    onSubmit: () => {},
    showClearIcon: undefined,
    showOptions: undefined,
    value: undefined
  };

  constructor(props) {
    super(props);

    const controlled = props.value !== undefined;

    this.state = {
      showOptions: false,
      value: undefined,
      controlled
    };
  }

  onInput = event => {
    this.props.onInput({ value: event.target.value });
    const clearIconVisible = event.target.value.length > 0;
    this.setState({ showOptions: true, clearIconVisible });
  };

  setValue(value) {
    if (this.state.controlled) {
      this.setState({ value: this.state.value });
    } else {
      this.setState({ value });
    }
  }

  handleOptionSelect = () => {
    const selectedOption = this.props.options[this.state.focusedOptionIndex];

    this.props.onOptionSelect(selectedOption);
    this.hideOptions();
  };

  handleOptionHover = focusedOptionIndex => () =>
    this.setState({ focusedOptionIndex });

  hideOptions = () => {
    this.setState({ showOptions: false, focusedOptionIndex: undefined });
  };

  showOptions = () => {
    const value =
      this.props.options !== undefined
        ? this.props.options.length > 0 && this.state.showOptions
        : false;
    return value;
  };

  handleClearIconClick = () => {
    this.setValue("");
    this.props.onInput({ value: "" });
    this.setState({ focusedOptionIndex: undefined, clearIconVisible: false });
  };

  handleKeydown = event => {
    switch (event.keyCode) {
      case 40:
        event.preventDefault();
        this.focusPrevious();
        break;
      case 37:
        event.preventDefault();
        this.focusPrevious();
        break;
      case 38:
        event.preventDefault();
        this.focusNext();
        break;
      case 39:
        event.preventDefault();
        this.focusNext();
        break;
      case 13:
        this.handleEnterPress(event.target.value);
        break;
      default:
        break;
    }
  };

  handleEnterPress(selectedValue) {
    if (this.state.focusedOptionIndex !== undefined) {
      this.handleOptionSelect(selectedValue);
      return;
    }

    this.props.onSubmit({ selectedValue });
    this.hideOptions();
  }

  focusPrevious() {
    if (
      this.state.focusedOptionIndex === undefined ||
      this.state.focusedOptionIndex >= this.props.options.length - 1
    ) {
      this.setState({ focusedOptionIndex: 0, showOptions: true });
    } else {
      const focusedOptionIndex = this.state.focusedOptionIndex + 1;
      this.setState({ focusedOptionIndex, showOptions: true });
    }
  }

  focusNext() {
    if (
      this.state.focusedOptionIndex === undefined ||
      this.state.focusedOptionIndex <= 0
    ) {
      const focusedOptionIndex = this.props.options.length - 1;
      this.setState({ focusedOptionIndex, showOptions: true });
    } else {
      const focusedOptionIndex = this.state.focusedOptionIndex - 1;
      this.setState({ focusedOptionIndex, showOptions: true });
    }
  }

  render() {
    return (
      <SearchAdapter
        {...this.props}
        value={this.props.value}
        onInput={this.onInput}
        showOptions={this.showOptions()}
        showClearIcon={this.state.clearIconVisible}
        onClearIconClick={this.handleClearIconClick}
        onClickOutside={this.hideOptions}
        onKeydown={this.handleKeydown}
      >
        {this.props.options !== undefined && this.props.options.length > 0
          ? this.props.options.map((option, index) => (
              <Option
                key={option.value}
                focused={index === this.state.focusedOptionIndex}
                {...option}
                onClick={this.handleOptionSelect}
                onHover={this.handleOptionHover(index)}
              />
            ))
          : null}
      </SearchAdapter>
    );
  }
}

Search.propTypes = {
  /**
   * Autocomplete options to present when begins typing their query
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string
    })
  ),
  /**
   * Calls the provided callback when user enters text in Search input
   */
  onInput: PropTypes.func,
  /**
   * Value of search input
   */
  value: PropTypes.string,
  /**
   * Shows filtered options
   */
  showOptions: PropTypes.bool,
  /**
   * Calls the callback on Blur
   */
  onBlur: PropTypes.func,
  /**
   * Calls the callback on Focus
   */
  onFocus: PropTypes.func,
  /**
   * Show the clear input icon
   */
  showClearIcon: PropTypes.bool,
  /**
   * Calls the provided callback when the clear icon is clicked
   */
  onClearIconClick: PropTypes.func,
  /**
   * Calls the provided callback when user clicks outside of the auto-complete menu
   */
  onClickOutside: PropTypes.func,
  /**
   * Calls the provided callback when user presses a key when the Search has focus
   */
  onKeydown: PropTypes.func,
  /**
   * Calls the provided callback when user presses Enter key while the Search has focus
   */
  onSubmit: PropTypes.func,
  /**
   * Calls the provided callback when user selects an auto-complete option
   */
  onOptionSelect: PropTypes.func
};
