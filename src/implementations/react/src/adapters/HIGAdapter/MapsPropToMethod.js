import { Component } from 'react';
import PropTypes from 'prop-types';
import throwIfNoHIGMethod from './throwIfNoHIGMethod';

class MapsPropToMethod extends Component {
  static propTypes = {
    children: PropTypes.func,
    displayName: PropTypes.string.isRequired,
    higInstance: PropTypes.object.isRequired,
    mounted: PropTypes.bool.isRequired,
    setter: PropTypes.string,
    value: PropTypes.any
  }

  static defaultProps = {
    children: undefined,
    setter: undefined,
    value: undefined
  }

  constructor(props) {
    super(props);
    this.state = { unset: props.value === undefined };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== undefined) {
      this.setState({ unset: false });
    }
  }

  throwIfNoSetter() {
    if (this.props.higInstance[this.props.setter] === undefined) {
      throw (new TypeError(`${this.props.displayName} has no method '${this.props.setter}'`));
    }
  }

  render() {
    if (!this.props.mounted) {
      return null;
    }

    if (this.props.value === undefined && this.state.unset) {
      return null;
    }

    if (this.props.children) {
      this.props.children(this.props.higInstance, this.props.value);
    } else {
      throwIfNoHIGMethod(this.props, this.props.setter);
      this.props.higInstance[this.props.setter](this.props.value);
    }

    return null;
  }
}

export default MapsPropToMethod;
