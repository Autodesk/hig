import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MountsAnyChild extends Component {
  static propTypes = {
    children: PropTypes.node,
    higInstance: PropTypes.object,
    mounted: PropTypes.bool,
    mounter: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  static childContextTypes = {
    higParent: PropTypes.object
  }

  getChildContext() {
    return { higParent: null };
  }

  setEl = (el) => {
    this.el = el;
  }

  componentDidMount() {
    this.passChildren(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.passChildren(nextProps);
  }

  passChildren(props) {
    if (props.mounted && this.el) {
      props.higInstance[props.mounter](this.el);
    }
  }

  render() {
    let children = this.props.children;
    if (children === undefined || (children.length !== undefined && children.length === 0)) {
      children = null;
    }

    return <div ref={this.setEl}>{children}</div>;
  }
}
