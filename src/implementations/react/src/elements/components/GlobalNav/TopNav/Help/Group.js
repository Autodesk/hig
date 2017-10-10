import React, { Component } from 'react';


import GroupAdapter from '../../../../../adapters/GlobalNav/TopNav/GroupAdapter';

class Group extends Component {
  static propTypes = {
  }


  render() {
    const { ...otherProps } = this.props;
    return (<GroupAdapter {...otherProps} />);
  }
}

export default Group;
