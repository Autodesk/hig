import { Component } from "react";
import PropTypes from "prop-types";

export default class FocusBehavior extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  constructor(props) {
    super(props);

    // Binding in the constructor because performance
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      hasFocus: false
    };
  }

  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ hasFocus: true });
    }
  }

  handleBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ hasFocus: false });
    }
  }

  render() {
    return this.props.children({
      hasFocus: this.state.hasFocus,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    });
  }
}
