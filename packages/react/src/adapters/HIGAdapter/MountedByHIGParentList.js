/* eslint-disable react/no-unused-prop-types */
import { PureComponent } from "react";
import PropTypes from "prop-types";
import HIGPropTypes from "./HIGPropTypes";

export default class MountedByHIGParentList extends PureComponent {
  static propTypes = {
    higInstance: HIGPropTypes.higInstance,
    higParent: HIGPropTypes.higInstance,
    mounter: PropTypes.string.isRequired,
    onMount: PropTypes.func.isRequired
  };

  static defaultProps = {
    higParent: undefined
  };

  componentDidMount() {
    this.mountToParentList(this.props);
  }

  componentWillUpdate(nextProps) {
    this.mountToParentList(nextProps);
  }

  mountToParentList(props) {
    if (!props.higParent) {
      return;
    }

    props.higParent[props.mounter](props.higInstance);
    this.props.onMount();
  }

  render() {
    return null;
  }
}
/* eslint-enable react/no-unused-prop-types */
