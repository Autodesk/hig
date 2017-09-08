import React, { Component } from 'react';
import OptionAdapter
  from '../../../adapters/FormElements/NewOptionAdapter.js';
import * as PropTypes from 'prop-types';

class Option extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  handleClick = (event) => {
    this.props.onClick(this.props.value);
  }

  render() {
    return (
      <OptionAdapter {...this.props} onClick={this.handleClick} />
    )
  }
}

export default Option;
