import React, { Component } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import { TextFieldPresenter } from "@hig/text-field";
import Option from "./presenters/Option";
import composeEventHandlers from "./composeEventHandlers";

import "./dropdown.scss";

export default class Dropdown extends Component {
  static propTypes = {
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
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * An array of objects to choose from.
     */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ),
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when user puts focus onto the field
     */
    onFocus: PropTypes.func
  };

  render() {
    const {
      label,
      instructions,
      placeholder,
      required,
      disabled,
      onBlur,
      onFocus,
      options
    } = this.props;

    return (
      <Downshift itemToString={item => (item ? item.label : "")}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          selectedItem,
          toggleMenu
        }) => (
          <div className="hig__dropdown">
            <TextFieldPresenter
              {...getInputProps({
                label,
                instructions,
                required,
                placeholder,
                disabled,
                onBlur,
                onFocus: composeEventHandlers(toggleMenu, onFocus),
                readOnly: true // @TODO: toggle based on desired type of Dropdown
              })}
            />
            {isOpen && (
              <div className="hig__dropdown-v1__menu">
                {options.map((option, index) => (
                  <Option
                    {...getItemProps({
                      key: option.value,
                      index,
                      item: option,
                      selected: selectedItem === option
                    })}
                  >
                    {option.label}
                  </Option>
                ))}
              </div>
            )}
          </div>
        )}
      </Downshift>
    );
  }
}
