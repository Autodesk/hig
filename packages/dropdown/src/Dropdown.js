import React, { Component } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import { cx } from "emotion";
import MultiDownshift from "@hig/multi-downshift";

import InputPresenter from "./presenters/InputPresenter";
import MenuPresenter from "./presenters/MenuPresenter";
import renderWrapper from "./presenters/WrapperPresenter";
import renderOptions from "./presenters/renderOptions";

/** @typedef {import("./presenters/renderOptions").OptionMeta} OptionMeta */
/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

const variantTypes = ["line", "box"];

export default class Dropdown extends Component {
  static propTypes = {
    /**
     * The default value when the component is uncontrolled
     */
    defaultValue: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Used to format options into human readable strings
     *
     * Note that if both formatOption and renderOption are provided,
     * renderOption will take precedence
     */
    formatOption: PropTypes.func,
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Enables multiple selection
     */
    multiple: PropTypes.bool,
    /**
     * Called when the text field is blurred
     */
    onBlur: PropTypes.func,
    /**
     * Called with the selected option when the value changes
     */
    onChange: PropTypes.func,
    /**
     * Called when the text field is focused
     */
    onFocus: PropTypes.func,
    /**
     * Called when the input field value changes
     */
    onInputChange: PropTypes.func,
    /**
     * An array of unique values of any type except `undefined`
     * If you use an array of objects, the object must contain the property `item`,
     * the option's disabled state can be controlled with a `disabled` property.
     */
    options: PropTypes.arrayOf(PropTypes.any),
    /**
     * Placeholder text to render when an option has not been selected
     */
    placeholder: PropTypes.string,
    /**
     * When present, this function is used to render each option.  Each
     * option is passed as an argument. If any option has Option.render
     * prop present, that will take precedence and this
     * function will not be called for that option.
     *
     * In  addition to the option passed as an argument, props
     * are also passed in that can be used for each option to help
     * maintain some of the built-in `Dropdown` option functionality.
     *
     * Similarly if both formatOption and renderOption are provided,
     * renderOption will take precedence
     */
    renderOption: PropTypes.func,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * Allows the input to be typeable
     */
    searchable: PropTypes.bool,
    /**
     * The value of the control
     */
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    /**
     * The visual variant of the textarea
     */
    variant: PropTypes.oneOf(variantTypes),
    /**
     * Specifies if the value provided is wrong
     */
    error: PropTypes.bool
  };

  static defaultProps = {
    /**
     * @param {OptionMeta} option
     * @returns {string}
     */
    formatOption(option) {
      return option ? String(option) : "";
    },
    searchable: false
  };

  getBehaviorProps() {
    const { id, multiple, formatOption, value, defaultValue } = this.props;
    const valuePropName = multiple ? "selectedItems" : "selectedItem";
    const defaultValuePropName = multiple
      ? "initialSelectedItems"
      : "initialSelectedItem";

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
    const { id, isOpen, toggleMenu, getInputProps } = downshift;
    const {
      placeholder,
      disabled,
      required,
      onBlur,
      onFocus,
      onInputChange,
      variant,
      error,
      searchable,
      ...otherProps
    } = this.props;

    const { className } = otherProps;
    const inputClassName =
      className &&
      className
        .split(" ")
        .reduce((acc, cur) => cx(acc, `${cur.trim()}-input-wrapper`), "");

    const inputProps = getInputProps({
      id,
      error,
      placeholder,
      disabled,
      isOpen,
      required,
      onBlur,
      onFocus,
      onClick: toggleMenu,
      onInputChange,
      variant,
      className: inputClassName,
      searchable
    });

    return <InputPresenter key="input" {...inputProps} />;
  }

  /**
   * @param {DownshiftHelpers} downshift
   * @returns {JSX.Element}
   */
  renderMenu(downshift) {
    const {
      getItemProps,
      getMenuProps,
      highlightedIndex,
      isOpen,
      selectedItem,
      selectedItems
    } = downshift;

    const {
      formatOption,
      multiple,
      options,
      renderOption,
      ...otherProps
    } = this.props;

    const { className } = otherProps;

    const menuClassName =
      className &&
      className
        .split(" ")
        .reduce((acc, cur) => cx(acc, `${cur.trim()}-menu-wrapper`), "");

    const menuProps = getMenuProps({
      isOpen,
      refKey: "innerRef",
      className: menuClassName
    });

    const children = renderOptions({
      formatOption,
      getItemProps,
      highlightedIndex,
      multiple,
      options,
      renderOption,
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
    const {
      children,
      defaultValue,
      disabled,
      formatOption,
      id,
      multiple,
      onBlur,
      onChange,
      onFocus,
      options,
      placeholder,
      renderOption,
      required,
      searchable,
      value,
      variant,
      error,
      ...otherProps
    } = this.props;

    /**
     * The `Wrapper` presenter is used as a function to avoid having to
     * use Downshift's `getRootProps`
     * @see https://github.com/paypal/downshift#getrootprops
     */
    return renderWrapper({
      disabled,
      children: [this.renderInput(downshift), this.renderMenu(downshift)],
      ...otherProps
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
