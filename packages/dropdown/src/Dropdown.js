import React, { Component } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import MultiDownshift from "@hig/multi-downshift";

import InputPresenter from "./presenters/InputPresenter";
import MenuPresenter from "./presenters/MenuPresenter";
import renderWrapper from "./presenters/WrapperPresenter";
import renderOptions from "./presenters/renderOptions";

/** @typedef {import("./presenters/renderOptions").OptionMeta} OptionMeta */
/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

export default class Dropdown extends Component {
  static propTypes = {
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
    /**
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Placeholder text to render when an option has not been selected
     */
    placeholder: PropTypes.string,
    /**
     * Enables multiple selection
     */
    multiple: PropTypes.bool,
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * The default value when the component is uncontrolled
     */
    defaultValue: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    /**
     * An array of objects to choose from
     */
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    /**
     * An array of unique values of any type except `undefined`
     */
    options: PropTypes.arrayOf(PropTypes.any),
    /**
     * Called with the selected option when the value changes
     */
    onChange: PropTypes.func,
    /**
     * Called when the text field is blurred
     */
    onBlur: PropTypes.func,
    /**
     * Called when the text field is focused
     */
    onFocus: PropTypes.func,
    /**
     * Used to format options into human readable strings
     */
    formatOption: PropTypes.func
  };

  static defaultProps = {
    /**
     * @param {OptionMeta} option
     * @returns {string}
     */
    formatOption(option) {
      return option ? String(option) : "";
    }
  };

  getBehaviorProps() {
    const { id, multiple, formatOption, value, defaultValue } = this.props;
    const valuePropName = multiple ? "selectedItems" : "selectedItem";
    const defaultValuePropName = multiple
      ? "defaultSelectedItems"
      : "defaultSelectedItem";

    return {
      id,
      onChange: this.handleChange,
      itemToString: formatOption,
      [valuePropName]: value,
      [defaultValuePropName]: defaultValue,
      inputValue: this.getInputValue()
    };
  }

  /**
   * The controlled value for the input element
   * @see https://github.com/paypal/downshift#inputvalue
   * @returns {string|undefined}
   */
  getInputValue() {
    const { multiple, formatOption, value } = this.props;

    if (value === undefined) {
      return undefined;
    }
    if (multiple) {
      return value.map(formatOption).join(", ");
    }

    return formatOption(value);
  }

  /**
   * > Why not just pass the `props.onChange` directly to Downshift?
   *
   *  Downshift provides all of it's helpers and state to `onChange`.
   *  We don't want to expose the entire Downshift API to consumers.
   *
   * @param {OptionMeta | OptionMeta[]} value
   * @param {DownshiftHelpers} downshift
   */
  handleChange = value => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }
  };

  /**
   * @param {DownshiftHelpers} downshift
   * @returns {JSX.Element}
   */
  renderInput(downshift) {
    const { id, toggleMenu, getInputProps } = downshift;
    const {
      label,
      instructions,
      placeholder,
      disabled,
      required,
      onBlur,
      onFocus
    } = this.props;

    const inputProps = getInputProps({
      id,
      label,
      instructions,
      placeholder,
      disabled,
      required,
      onBlur,
      onFocus,
      onClick: toggleMenu
    });

    return <InputPresenter key="input" {...inputProps} />;
  }

  /**
   * @param {DownshiftHelpers} downshift
   * @returns {JSX.Element}
   */
  renderMenu(downshift) {
    const {
      isOpen,
      getItemProps,
      getMenuProps,
      highlightedIndex,
      selectedItem,
      selectedItems
    } = downshift;
    const menuProps = getMenuProps({ isOpen, refKey: "innerRef" });
    const { multiple, options, formatOption } = this.props;
    const children = renderOptions({
      multiple,
      options,
      formatOption,
      getItemProps,
      highlightedIndex,
      selectedItem,
      selectedItems
    });

    return (
      <MenuPresenter key="menu" {...menuProps}>
        {children}
      </MenuPresenter>
    );
  }

  /**
   * @param {DownshiftHelpers} downshift
   * @returns {JSX.Element}
   */
  renderPresenter = downshift => {
    const { disabled } = this.props;

    /**
     * The `Wrapper` presenter is used as a function to avoid having to use Downshift's `getRootProps`
     * @see https://github.com/paypal/downshift#getrootprops
     */
    return renderWrapper({
      disabled,
      children: [this.renderInput(downshift), this.renderMenu(downshift)]
    });
  };

  render() {
    const { multiple } = this.props;
    const Behavior = multiple ? MultiDownshift : Downshift;

    return (
      <Behavior {...this.getBehaviorProps()}>{this.renderPresenter}</Behavior>
    );
  }
}
