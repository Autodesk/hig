import { Component } from "react";
import PropTypes from "prop-types";

export default class HoverBehavior extends Component {
  static propTypes = {
    /**
     * Generally the Flyout target and presenter
     */
    children: PropTypes.func.isRequired,
    /**
     * Amount of time between mouse enter is reported and when
     * onMouseEnter event should fire
     */
    openOnHoverDelay: PropTypes.number,
    /**
     * Function called when the user enters the visual space
     * occupied by the component
     */
    onMouseEnter: PropTypes.func,
    /**
     * Function called when the user leaves the visual space
     * occupied by the component
     */
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
    const { openOnHoverDelay, onMouseEnter } = this.props;

    if (onMouseEnter) {
      this.focusTimeout = setTimeout(() => {
        this.setState({ hasHover: true });
        onMouseEnter(event);
      }, openOnHoverDelay);
    }

    this.setState({ hasHover: true });
  }

  handleBlur(event) {
    if (this.props.onMouseLeave) {
      clearTimeout(this.focusTimeout);
      this.props.onMouseLeave(event);
    }

    this.setState({ hasHover: false });
  }

  render() {
    return this.props.children({
      hasHover: this.state.hasHover,
      onMouseEnter: this.handleFocus,
      onMouseLeave: this.handleBlur
    });
  }
}
