import React, { Component } from "react";
import * as PropTypes from "prop-types";
import OptionAdapter from "../../../adapters/FormElements/OptionAdapter";

class Option extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  handleClick = () => {
    this.props.onClick(this.props.value);
  };

  render() {
    return <OptionAdapter {...this.props} onClick={this.handleClick} />;
  }
}

export default Option;