import PropTypes from "prop-types";

const TagBehavior = (props) => {
  /**
   * @param {KeyboardEvent} event
   */
  const onKeyboardClose = (event) => {
    const { onClose, onKeyDown } = props;

    if (onKeyDown) {
      onKeyDown(event);
    }

    if (event.code === "Escape") {
      if (onClose) {
        onClose(event);
      }
    }
  };

  return props.children({
    onKeyboardClose,
  });
};

TagBehavior.displayName = "TagBehavior";

TagBehavior.propTypes = {
  /**
   * Triggers onClose when the Escape key is pressed
   */
  onKeyboardClose: PropTypes.func,
};

export default TagBehavior;
