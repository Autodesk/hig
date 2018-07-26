import { Component } from "react";
import PropTypes from "prop-types";

export default class CheckboxBehavior extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
    /**
     * Initially checks the checkbox, but allows user action to change it
     */
    defaultChecked: PropTypes.bool,
    /**
     * Called when user clicks on the field
     */
    onClick: PropTypes.func,
    /**
     * Called when user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Render prop
     */
    children: PropTypes.func
  };

  static defaultProps = {
    defaultChecked: false
  };

  state = {
    checked: this.props.defaultChecked
  };

  isControlled() {
    return this.props.checked !== undefined;
  }

  isChecked() {
    if (this.isControlled()) {
      return this.props.checked;
    }

    return this.state.checked;
  }

  toggleChecked() {
    const { onChange } = this.props;
    const checked = !this.state.checked;

    if (onChange) {
      onChange(checked);
    }

    this.setState({ checked });
  }

  /**
   * @param {MouseEvent} event
   */
  handleClick = event => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }

    if (!this.isControlled()) {
      this.toggleChecked();
    }
  };

  render() {
    return this.props.children({
      checked: this.isChecked(),
      handleClick: this.handleClick
    });
  }
}
