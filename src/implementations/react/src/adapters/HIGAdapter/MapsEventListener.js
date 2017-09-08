import { Component } from 'react';
import PropTypes from 'prop-types';

export default class MapsEventlistener extends Component {
  static propTypes = {
    listener: PropTypes.string.isRequired,
    handler: PropTypes.any,
    mounted: PropTypes.bool.isRequired,
    higInstance: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.configureHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.configureHandler(nextProps);
  }

  componentWillUnmount() {
    if (this.state.dispose) {
      this.state.dispose();
    }
  }

  configureHandler(props) {
    if (!props.mounted) { return; }

    if (this.state.dispose) {
      this.state.dispose();
    }

    if(!props.handler) { return; }

    this.setState({ dispose: props.higInstance[props.listener](props.handler) });
  }

  render() { return null; }
}
