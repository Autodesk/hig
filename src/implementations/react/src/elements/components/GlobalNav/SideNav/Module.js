import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModuleAdapter from '../../../../adapters/GlobalNav/SideNav/ModuleAdapter';

class Module extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  }

  render() {
    const { onClick, id, ...rest } = this.props;
    return (
      <ModuleAdapter onClick={this.handleClick} {...rest} />
    );
  }
}

export default Module;
