import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MountsHIGChildList extends Component {
  static propTypes = {
    children: PropTypes.node,
    higInstance: PropTypes.any,
    mounted: PropTypes.bool.isRequired
  }

  static defaultProps = {
    children: null
  }

  static childContextTypes = {
    higParent: PropTypes.object
  }

  getChildContext() {
    return { higParent: this.props.higInstance };
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return child ? React.cloneElement(child, { index }) : null;
    });

    return this.props.mounted ? (<div>{children}</div>) : null;
  }
}

export default MountsHIGChildList;
