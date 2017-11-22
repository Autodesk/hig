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

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.initialProps = props;
    console.log("initialProps search", this.initialProps);

    this.state = {
      showOptions: this.props.showOptions
    };
  }

  onInput = event => {
    this.props.onSearchInput({ value: event.target.value });
  };

  // hideOptions = () => {
  //   this.setState({ showOptions: false });
  // };

  render() {
    return (
      <SearchAdapter
        onInput={this.onInput}
        showOptions={this.props.showOptions}
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
