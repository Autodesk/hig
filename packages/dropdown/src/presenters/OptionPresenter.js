import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { names } from "@hig/icon";

import "./OptionPresenter.scss";

export default class OptionPresenter extends Component {
  static propTypes = {
    /**
     * Visual representation of the option
     */
    children: PropTypes.node,
    /**
     * Indicates the option is currently highlighted. This is comparable to hover state, but useful when interacting by keyboard.
     */
    highlighted: PropTypes.bool,
    /**
     * Called when user finishes clicking on an option
     */
    onClick: PropTypes.func,
    /**
     * Called when user moves mouse over the option
     */
    onHover: PropTypes.func,
    /**
     * Called when user begins clicking on an option
     */
    onMouseDown: PropTypes.func,
    /**
     * Called when user moves mouse over the option
     */
    onMouseMove: PropTypes.func,
    /**
     * Called when the user selects the option by clicking or keyboard interaction
     */
    onSelect: PropTypes.func,
    /**
     * Indicates the option is currently selected
     */
    selected: PropTypes.bool,
    /**
     * Data represented by the option
     */
    value: PropTypes.string
  };

  render() {
    const { children, highlighted, selected, ...otherProps } = this.props;

    return (
      <div
        className={cx("hig__dropdown-option", {
          "hig__dropdown-option--selected": selected,
          "hig__dropdown-option--highlighted": highlighted
        })}
        {...otherProps}
      >
        <span className="hig__dropdown-option__label">{children}</span>

        {selected && (
          <div className="hig__dropdown-option__checkmark">
            <Icon name={names.CHECKMARK_BLUE_DARK} />
          </div>
        )}
      </div>
    );
  }
}
