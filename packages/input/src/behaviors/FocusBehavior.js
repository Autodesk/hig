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
    this.setState({ hasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  handleBlur(event) {
    this.setState({ hasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
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
