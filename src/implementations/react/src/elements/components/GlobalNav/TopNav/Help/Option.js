import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OptionAdapter from '../../../../../adapters/GlobalNav/TopNav/OptionAdapter';

class Option extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    const { name, link, onClick, ...otherProps } = this.props;
    return (<OptionAdapter onClick={this.handleClick} {...otherProps} />);
  }
}

export default Option;
