import React, { Component } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import MultiDownshift from "@hig/multi-downshift";
import { combineEventHandlers } from "@hig/utils";

import InputPresenter from "./presenters/InputPresenter";
import MenuPresenter from "./presenters/MenuPresenter";
import renderWrapper from "./presenters/WrapperPresenter";
import renderOptions from "./presenters/renderOptions";

/** @typedef {import("./presenters/renderOptions").OptionMeta} OptionMeta */
/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

/**
 * @param {OptionMeta} option
 * @returns {string}
 */
function stringifyOption(option) {
  return option ? option.label : "";
}

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
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ),
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
    onFocus: PropTypes.func
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
    const { toggleMenu, getInputProps } = downshift;

    const {
      id,
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
      onFocus: combineEventHandlers(toggleMenu, onFocus)
    });

    return <InputPresenter {...inputProps} />;
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

    if (!isOpen) return null;

    const { options } = this.props;

    const children = renderOptions({
      options,
      getItemProps,
      highlightedIndex,
      selectedItem,
      selectedItems
    });

    return <MenuPresenter {...getMenuProps()}>{children}</MenuPresenter>;
  }

  /**
   * @param {DownshiftHelpers} downshift
   * @returns {JSX.Element}
   */
  renderPresenter = downshift => {
    const { isOpen } = downshift;
    const { disabled } = this.props;

    /**
     * The `Wrapper` presenter is used as a function to avoid having to use Downshift's `getRootProps`
     * @see https://github.com/paypal/downshift#getrootprops
     */
    return renderWrapper({
      isOpen,
      disabled,
      input: this.renderInput(downshift),
      menu: this.renderMenu(downshift)
    });
  };

  render() {
    const { multiple } = this.props;
    const Behavior = multiple ? MultiDownshift : Downshift;

    return (
      <Behavior onChange={this.handleChange} itemToString={stringifyOption}>
        {this.renderPresenter}
      </Behavior>
    );
  }
}
