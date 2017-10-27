import { Component } from "react";
import PropTypes from "prop-types";
import HIGPropTypes from "./HIGPropTypes";

export default class MountsHIGChild extends Component {
  static propTypes = {
    children: PropTypes.node,
    higInstance: HIGPropTypes.higInstance,
    mounted: PropTypes.bool
  };

  static contextTypes = {
    higParent: PropTypes.object
  };

  static childContextTypes = {
    higParent: PropTypes.object
  };

  static defaultProps = {
    children: null
  };

  getChildContext() {
    return { higParent: this.props.higInstance };
  }

  render() {
    return this.props.mounted ? this.props.children : null;
  }
}
