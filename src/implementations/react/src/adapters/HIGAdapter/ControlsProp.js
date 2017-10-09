import { Component } from 'react';
import PropTypes from 'prop-types';
import throwIfNoHIGMethod from './throwIfNoHIGMethod';

class ControlsProp extends Component {
  static propTypes = {
    defaultValue: PropTypes.any,
    eventTargetPropName: PropTypes.string,
    handler: PropTypes.func,
    higInstance: PropTypes.object.isRequired,
    listener: PropTypes.string,
    mounted: PropTypes.bool.isRequired,
    setter: PropTypes.string,
    value: PropTypes.any
  }

  defaultProps = {
    eventTargetPropName: 'value',
    defaultValue: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      controlled: props.value !== undefined,
      value: this.defaultValue()
    }
  }

  defaultValue() {
    const { defaultValue, value } = this.props;

    return value !== undefined
      ? value
      : defaultValue;
  }

  renderedValue() {
    return this.props.value !== undefined
      ? this.props.value
      : this.state.value;
  }

  componentWillReceiveProps(nextProps) {
    this.configureHandler(nextProps);

    if (nextProps.value !== undefined) {
      this.setState({ unset: false });
    }
  }

  configureHandler(props) {
    if (!props.mounted) { return; }

    if (this.state.dispose) {
      this.state.dispose();
    }

    if(!props.handler) { return; }

    throwIfNoHIGMethod(this.props, this.props.listener);
    this.setState({ dispose: props.higInstance[props.listener](this.handleEvent) });
  }

  handleEvent = (event) => {
    if (this.props.handler) {
      this.props.handler(event);
    }

    if (this.state.controlled) {
      this.setState({ value: this.state.value });
    } else {
      this.setState({ value: event.target[this.props.eventTargetPropName] });
    }
  }

  render() {
    if(!this.props.mounted) {
      return null;
    }

    if(this.state.value === undefined) {
      return null;
    }

    if (this.props.children) {
      this.props.children(this.props.higInstance, this.renderedValue());
    } else {
      throwIfNoHIGMethod(this.props, this.props.setter);
      this.props.higInstance[this.props.setter](this.renderedValue());
    }

    return null;
  }
}

export default ControlsProp;