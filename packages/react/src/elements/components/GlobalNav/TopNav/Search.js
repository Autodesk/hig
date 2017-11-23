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
      showOptions: this.props.showOptions,
      value: this.getDefaultValue(),
      controlled
    };
  }

  onInput = event => {
    this.props.onSearchInput({ value: event.target.value });
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

  // showOptions = () => {
  //   if (this.props.showOptions) {
  //     this.setState({ showOptions: true });
  //   }
  // };

  hideClearIcon = () => {
    this.setState({ clearIconVisible: false });
  };

  showClearIcon = () => {
    this.setState({ clearIconVisible: true });
  };

  handleClearIconClick = () => {
    this._setValue("");
    this.props.onSearchInput({ value: "" });
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
        showOptions={this.props.showOptions}
        onBlur={this.hideClearIcon}
        onFocus={this.showClearIcon}
        showClearIcon={this.state.clearIconVisible}
        onClearIconClick={this.handleClearIconClick}
        onClickOutside={this.handleClearIconClick}
        // onTargetClick={this.showOptions}
      >
        {this.props.options.length > 0
          ? this.props.options.map(option => (
              <Option
                key={option.value}
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
