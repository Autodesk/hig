/* eslint-disable react/no-unused-prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import HIGPropTypes from "./HIGPropTypes";

export default class MountsAnyChild extends Component {
  static propTypes = {
    children: PropTypes.node,
    higInstance: HIGPropTypes.higInstance,
    mounted: PropTypes.bool.isRequired,
    mounter: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: undefined,
    higInstance: undefined
  };

  static childContextTypes = {
    higParent: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return { higParent: null };
  }

  componentDidMount() {
    this.passChildren(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.passChildren(nextProps);
  }

  setEl = el => {
    this.el = el;
  };

  passChildren(props) {
    if (props.mounted && this.el) {
      props.higInstance[props.mounter](this.el);
    }
  }

  render() {
    let { children } = this.props;
    if (
      children === undefined ||
      (children.length !== undefined && children.length === 0)
    ) {
      children = null;
    }

    return <div ref={this.setEl}>{children}</div>;
  }
}
/* eslint-enable react/no-unused-prop-types */
