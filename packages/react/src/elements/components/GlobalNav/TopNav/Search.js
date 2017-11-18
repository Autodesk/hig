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

    this.state = {};
  }

  render() {
    return (
      <SearchAdapter>
        {this.props.options.map(option => (
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
        ))}
      </SearchAdapter>
    );
  }
}

export default Search;
