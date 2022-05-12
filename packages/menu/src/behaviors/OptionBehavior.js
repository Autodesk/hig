import PropTypes from "prop-types";
import selectOption from "./selectOption";

const OptionBehavior = (props) => {
  const getIndexFromId = (id) => {
    const options = props.getOptionsInfo();
    const optionIds = [];

    if (options !== null) {
      Object.keys(options).forEach((index) => {
        optionIds.push(options[index].id);
      });
    }

    return optionIds.indexOf(id) > -1 ? optionIds.indexOf(id) : null;
  };

  const handleClick = (event) => {
    const {
      disabled,
      getActiveOption,
      id,
      multiple,
      onClick,
      role,
      selected,
      setActiveOption,
    } = props;
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

  const handleMouseEnter = (event) => {
    if (props.onMouseEnter) {
      props.onMouseEnter(event);
    }

    // we don't want to set the highlight state on hover when scrolling via keyboard
    if (props.getPreviousEvent() === `keydown`) {
      return;
    }

    if (props.disabled || props.role === `presentation`) {
      return;
    }

    if (props.setHighlightIndex) {
      props.setHighlightIndex(Number(getIndexFromId(props.id)) + 1);
    }
  };

  const handleMouseLeave = (event) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(event);
    }

    // we don't want to set the highlight state on hover when scrolling via keyboard
    if (props.getPreviousEvent() === `keydown`) {
      return;
    }

    if (props.setHighlightIndex) {
      props.setHighlightIndex(0);
    }
  };

  const isActive = () => {
    const { id, getActiveOption, multiple } = props;

    if (multiple) {
      return getActiveOption().indexOf(id) > -1;
    }

    return id === getActiveOption()[0];
  };

  return props.children({
    getIndexFromId,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    isActive,
  });
};

OptionBehavior.displayName = "OptionBehavior";

OptionBehavior.propTypes = {
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
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.arrayOf(PropTypes.any),
  setActiveOption: PropTypes.func,
  setHighlightIndex: PropTypes.func,
};

export default OptionBehavior;
