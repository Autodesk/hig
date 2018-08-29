import React, { Component } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import MultiDownshift from "@hig/multi-downshift";
import { combineEventHandlers } from "@hig/utils";

import InputPresenter from "./presenters/InputPresenter";
import MenuPresenter from "./presenters/MenuPresenter";
import renderWrapper from "./presenters/WrapperPresenter";
import renderOptions from "./presenters/renderOptions";
import TextInputBehavior from "./behaviors/TextInputBehavior";

/** @typedef {import("./presenters/renderOptions").OptionMeta} OptionMeta */
/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

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
     * Enables user to focus and type into the dropdown text field
     */
    hasTextEntry: PropTypes.bool,
    /**
     * HTML ID attribute
     */
    id: PropTypes.string,
    /**
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
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
     * Called when user types into the dropdown text field
     */
    onTextEntryChange: PropTypes.func,
    /**
     * An array of unique values of any type except `undefined`
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
     * Similarly if both formatOption and renderOption are provided,
     * renderOption will take precedence
     */
    renderOption: PropTypes.func,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * An array of objects to choose from
     */
    value: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ])
  };

  static defaultProps = {
    /**
     * @param {OptionMeta} option
     * @returns {string}
     */
    formatOption(option) {
      return option ? String(option) : "";
    },
    hasTextEntry: false
  };

  getBehaviorProps() {
    const { id, defaultValue, formatOption, multiple, value } = this.props;
    const defaultValuePropName = multiple
      ? "defaultSelectedItems"
      : "defaultSelectedItem";
    const valuePropName = multiple ? "selectedItems" : "selectedItem";

    return {
      id,
      inputValue: this.getInputValue(),
      itemToString: formatOption,
      onChange: this.handleChange,
      [defaultValuePropName]: defaultValue,
      [valuePropName]: value
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
  renderInput(downshift, handleTextEntryChange, textEntryValue) {
    const { getInputProps, id, toggleMenu } = downshift;
    const {
      disabled,
      hasTextEntry,
      instructions,
      label,
      onBlur,
      onFocus,
      placeholder,
      required
    } = this.props;

    const inputProps = getInputProps({
      disabled,
      id,
      instructions,
      label,
      placeholder,
      required,
      onBlur,
      onClick: toggleMenu,
      onFocus
    });

    const { onChange: downshiftOnChange } = inputProps;
    const onChange = combineEventHandlers(
      downshiftOnChange,
      handleTextEntryChange
    );
    const valueForPresentation = hasTextEntry
      ? textEntryValue
      : inputProps.value;

    return (
      <InputPresenter
        {...inputProps}
        hasTextEntry={hasTextEntry}
        key="input"
        value={valueForPresentation}
        onChange={onChange}
      />
    );
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
    const menuProps = getMenuProps({ isOpen, refKey: "innerRef" });
    const { formatOption, multiple, options, renderOption } = this.props;
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
  renderPresenter = (downshift, handleTextEntryChange, textFieldValue) => {
    const { disabled } = this.props;

    /**
     * The `Wrapper` presenter is used as a function to avoid having to use Downshift's `getRootProps`
     * @see https://github.com/paypal/downshift#getrootprops
     */
    return renderWrapper({
      disabled,
      children: [
        this.renderInput(downshift, handleTextEntryChange, textFieldValue),
        this.renderMenu(downshift)
      ]
    });
  };

  render() {
    const { defaultValue, multiple, onTextEntryChange, value } = this.props;
    const DropdownBehavior = multiple ? MultiDownshift : Downshift;
    const downshiftProps = this.getBehaviorProps();

    return (
      <TextInputBehavior
        defaultValue={defaultValue}
        onChange={onTextEntryChange}
        value={value}
      >
        {({ valueFromBehavior, handleChange }) => (
          <DropdownBehavior {...downshiftProps}>
            {downshift =>
              this.renderPresenter(downshift, handleChange, valueFromBehavior)
            }
          </DropdownBehavior>
        )}
      </TextInputBehavior>
    );
  }
}
