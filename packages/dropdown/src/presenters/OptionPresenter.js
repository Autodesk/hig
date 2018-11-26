import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CheckmarkBlueDark24 } from "@hig/icons";
import { createButtonEventHandlers } from "@hig/utils";

import "./OptionPresenter.scss";

function OptionWrapper(props) {
  const {
    children,
    highlighted,
    id,
    onClick,
    onMouseDown,
    onMouseMove,
    selected
  } = props;

  const classes = cx("hig__dropdown-option", {
    "hig__dropdown-option--selected": selected,
    "hig__dropdown-option--highlighted": highlighted
  });

  const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);

  return (
    <div
      aria-selected={selected}
      className={classes}
      id={id}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      role="option"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

OptionWrapper.propTypes = {
  children: PropTypes.node,
  highlighted: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  selected: PropTypes.bool
};

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
     * Called when user begins clicking on an option
     */
    onMouseDown: PropTypes.func,
    /**
     * Called when user moves mouse over the option
     */
    onMouseMove: PropTypes.func,
    /**
     * Indicates the option is currently selected
     */
    selected: PropTypes.bool
  };

  render() {
    const { children, selected, ...otherProps } = this.props;

    return (
      <OptionWrapper selected={selected} {...otherProps}>
        <span className="hig__dropdown-option__label">{children}</span>
        {selected && (
          <div className="hig__dropdown-option__checkmark">
            <CheckmarkBlueDark24 />
          </div>
        )}
      </OptionWrapper>
    );
  }
}
