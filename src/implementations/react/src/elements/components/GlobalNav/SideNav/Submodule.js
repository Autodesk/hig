import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmoduleAdapter from '../../../../adapters/GlobalNav/SideNav/SubmoduleAdapter';

class Submodule extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  }

  render() {
    const { onClick, id, ...otherProps } = this.props;
    return (
      <SubmoduleAdapter onClick={this.handleClick} {...otherProps} />
    );
  }
}

export default Submodule;