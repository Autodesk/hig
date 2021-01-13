import { Component } from "react";
import PropTypes from "prop-types";
import selectOption from "./selectOption";

export default class OptionBehavior extends Component {
  static propTypes = {
    children: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    getActiveOption: PropTypes.func,
    getOptionsInfo: PropTypes.func,
    getPreviousEvent: PropTypes.func,
    multiple: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    role: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.any),
    setActiveOption: PropTypes.func,
    setHighlightIndex: PropTypes.func
  };

  getIndexFromId = id => {
    const options = this.props.getOptionsInfo();
    const optionIds = [];

    if (options !== null) {
      Object.keys(options).forEach(index => {
        optionIds.push(options[index].id);
      });
    }

    return optionIds.indexOf(id) > -1 ? optionIds.indexOf(id) : null;
  };

  handleClick = event => {
    const {
      disabled,
      getActiveOption,
      id,
      multiple,
      onClick,
      role,
      selected,
      setActiveOption
    } = this.props;
    const activeOptionsArray = [...getActiveOption()];
    const activeOptions = selectOption(id, activeOptionsArray, multiple);

    if (onClick) {
      onClick(event);
    }

    if (disabled || role === `presentation`) {
      return;
    }

    // do nothing if controlled
    if (selected !== undefined) {
      return;
    }

    setActiveOption(activeOptions);
  };

  handleMouseEnter = event => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }

    // we don't want to set the highlight state on hover when scrolling via keyboard
    if (this.props.getPreviousEvent() === `keydown`) {
      return;
    }

    if (this.props.disabled || this.props.role === `presentation`) {
      return;
    }

    if (this.props.setHighlightIndex) {
      this.props.setHighlightIndex(
        Number(this.getIndexFromId(this.props.id)) + 1
      );
    }
  };

  handleMouseLeave = event => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }

    // we don't want to set the highlight state on hover when scrolling via keyboard
    if (this.props.getPreviousEvent() === `keydown`) {
      return;
    }

    if (this.props.setHighlightIndex) {
      this.props.setHighlightIndex(0);
    }
  };

  isActive = () => {
    const { id, getActiveOption, multiple } = this.props;

    if (multiple) {
      return getActiveOption().indexOf(id) > -1;
    }

    return id === getActiveOption()[0];
  };

  render() {
    const {
      getIndexFromId,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      isActive
    } = this;

    return this.props.children({
      getIndexFromId,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      isActive
    });
  }
}
