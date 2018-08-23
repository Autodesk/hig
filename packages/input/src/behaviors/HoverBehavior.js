import { Component } from "react";
import PropTypes from "prop-types";

export default class HoverBehavior extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  };

  constructor(props) {
    super(props);

    // Binding in the constructor because performance
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      hasHover: false
    };
  }

  handleFocus(event) {
    this.setState({ hasHover: true });

    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  }

  handleBlur(event) {
    this.setState({ hasHover: false });

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  }

  render() {
    return this.props.children({
      hasHover: this.state.hasHover,
      onMouseEnter: this.handleFocus,
      onMouseLeave: this.handleBlur
    });
  }
}
