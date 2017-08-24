import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModuleCollapseAdapter from '../../../../adapters/GlobalNav/SideNav/ModuleCollapseAdapter';

class ModuleCollapse extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  }

  render() {
    const { onClick, ...otherProps } = this.props;
    return (
      <ModuleCollapseAdapter onClick={this.handleClick} {...otherProps} />
    );
  }
}

export default ModuleCollapse;