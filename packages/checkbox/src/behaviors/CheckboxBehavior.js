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

  /**
   * @param {boolean} checked
   */
  setChecked(checked) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(checked);
    }

    this.setState({ checked });
  }

  toggleChecked() {
    this.setChecked(!this.state.checked);
  }

  isControlled() {
    return this.props.checked !== undefined;
  }

  isChecked() {
    if (this.isControlled()) {
      return this.props.checked;
    }

    return this.state.checked;
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

  /**
   * @param {UIEvent} event
   */
  handleChange = event => {
    if (!this.isControlled()) {
      this.setChecked(event.target.checked);
    }
  };

  render() {
    const { handleChange, handleClick } = this;
    const checked = this.isChecked();

    return this.props.children({
      checked,
      handleChange,
      handleClick
    });
  }
}
