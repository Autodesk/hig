import React, { Component } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import { TextFieldPresenter } from "@hig/text-field";
import { Option } from "hig-react";

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
     * Initial value of the field
     */
    value: PropTypes.string,
    /**
     * Initial value of the field
     */
    defaultValue: PropTypes.string,
    /**
     * An array of objects to choose from. These can take any shape, provided
     *  that you also use a compatible Option presenter and itemToString to function.
     */
    options: PropTypes.array, // eslint-disable-line react/forbid-prop-types
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
    const { label } = this.props;

    return (
      <Downshift>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          toggleMenu
        }) => (
          <div className="hig__dropdown">
            <TextFieldPresenter
              label={label}
              {...getInputProps()}
              onFocus={toggleMenu}
              readOnly // @TODO: toggle based on desired type of Dropdown
            />
            {isOpen && (
              <div className="hig__dropdown-v1__menu">
                {JSON.stringify(isOpen)}
              </div>
              // @TODO: render options
            )}
          </div>
        )}
      </Downshift>
    );
  }
}
