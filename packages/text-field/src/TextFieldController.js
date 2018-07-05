import { Component } from "react";
import PropTypes from "prop-types";

export default class TextFieldController extends Component {
  static propTypes = {
    /**
     * A render prop function
     */
    children: PropTypes.func,
    /**
     * Initial value of the field
     */
    defaultValue: PropTypes.string,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user clicks the clear button
     */
    onClearButtonClick: PropTypes.func,
    /**
     * Initial value of the field
     */
    value: PropTypes.string
  };

  state = {
    value: this.props.defaultValue || this.props.value
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) this.props.onChange(event);
  };

  handleInputClear = event => {
    this.setState({ value: "" });
    // @TODO: seems we should also trigger the onChange handler?
    if (this.props.onClearButtonClick) this.props.onClearButtonClick(event);
  };

  render() {
    return this.props.children({
      value: this.state.value,
      handleChange: this.handleChange,
      handleInputClear: this.handleInputClear
    });
  }
}
