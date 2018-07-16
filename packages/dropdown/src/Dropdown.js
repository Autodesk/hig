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

const OptionPropType = PropTypes.any;
const OptionsPropType = PropTypes.arrayOf(OptionPropType);

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
     * An array of objects to choose from
     */
    value: PropTypes.oneOfType([OptionPropType, OptionsPropType]),
    /**
     * An array of unique values of any type except `undefined`
     */
    options: OptionsPropType,
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
    const menuProps = getMenuProps({ isOpen });
    const { options, formatOption } = this.props;
    const children = renderOptions({
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
    const { id, multiple, formatOption } = this.props;
    const Behavior = multiple ? MultiDownshift : Downshift;

    return (
      <Behavior
        id={id}
        onChange={this.handleChange}
        itemToString={formatOption}
      >
        {this.renderPresenter}
      </Behavior>
    );
  }
}
