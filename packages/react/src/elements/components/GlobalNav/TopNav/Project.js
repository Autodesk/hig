import React, { Component } from "react";
import PropTypes from "prop-types";

import ProjectAdapter from "../../../../adapters/GlobalNav/TopNav/ProjectAdapter";

class Project extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { id, onClick, ...otherProps } = this.props;
    return <ProjectAdapter onClick={this.handleClick} {...otherProps} />;
  }
}

export default Project;
