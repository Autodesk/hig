import { Component } from 'react';
import PropTypes from 'prop-types';

export default class MountedByHIGParent extends Component {
  static propTypes = {
    higInstance: PropTypes.object.isRequired,
    higParent: PropTypes.object,
    mounter: PropTypes.string.isRequired,
    mounted: PropTypes.bool.isRequired,
    onMount: PropTypes.func.isRequired
  }

  static defaultProps = {
    higParent: undefined
  }

  componentDidMount() {
    this.mountToParent(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mounted && nextProps.higInstance !== this.props.higInstance) {
      this.props.higInstance.unmount();
    }
    this.mountToParent(nextProps);
  }

  mountToParent(props) {
    if (props.higParent && !props.mounted) {
      props.higParent[props.mounter](props.higInstance);
      props.onMount();
    }
  }

  render() {
    return null;
  }
}
