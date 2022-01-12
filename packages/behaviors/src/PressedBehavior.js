import { Component } from "react";
import PropTypes from "prop-types";

export default class PressedBehavior extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func
  };

  constructor(props) {
    super(props);

    // Binding in the constructor because performance
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      isPressed: false
    };
  }

  handleMouseDown(event) {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ isPressed: true });
    }
  }

  handleMouseLeave(event) {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ isPressed: false });
    }
  }

  handleMouseUp(event) {
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ isPressed: false });
    }
  }

  render() {
    return this.props.children({
      isPressed: this.state.isPressed,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onPressedMouseLeave: this.handleMouseLeave
    });
  }
}
