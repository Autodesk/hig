import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Downshift from "downshift";
import { TextFieldPresenter } from "@hig/text-field";
import Icon from "@hig/icon";
import "@hig/text-field/build/index.css";
import "@hig/icon/build/index.css";

import Option from "./presenters/Option";
import composeEventHandlers from "./composeEventHandlers";
import "./dropdown.scss";

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
     * Called after user changes the value of the field. Called with the entire object that was selected.
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
      id,
      label,
      instructions,
      placeholder,
      required,
      disabled,
      onBlur,
      onChange,
      onFocus,
      options
    } = this.props;

    return (
      <Downshift
        onChange={onChange}
        itemToString={item => (item ? item.label : "")}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          selectedItem,
          toggleMenu
        }) => (
          <div
            className={cx("hig__dropdown", {
              "hig__dropdown--disabled": disabled
            })}
          >
            <div className="hig__dropdown__input-wrapper">
              <TextFieldPresenter
                {...getInputProps({
                  id,
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
              <span className="hig__dropdown__input-caret">
                {/* @TODO: there are variations of the TextField with multiple icons at the end of the input. These icon nodes should be passed as props to TextField. */}
                <Icon name="caret" />
              </span>
            </div>

            {isOpen && (
              <div className="hig__dropdown-v1__menu">
                {options.map((option, index) => (
                  <Option
                    {...getItemProps({
                      key: option.value,
                      index,
                      item: option,
                      selected: selectedItem === option,
                      highlighted: highlightedIndex === index
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
