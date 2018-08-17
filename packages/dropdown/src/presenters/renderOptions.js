import React from "react";

import OptionPresenter from "./OptionPresenter";

/**
 * @typedef {any} OptionMeta
 */

/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

/**
 * @param {DownshiftHelpers} downshift
 * @returns {function(OptionMeta): boolean}
 */
function createSelectedDeterminer(downshift) {
  const { multiple, selectedItem, selectedItems } = downshift;

  return option =>
    multiple ? selectedItems.includes(option) : option === selectedItem;
}

/**
 * @param {DownshiftHelpers} downshift
 * @param {function(Object)} renderOption
 * @returns {function(OptionMeta, number): JSX.Element}
 */
function createOptionRenderer(downshift, renderOption) {
  const { formatOption, getItemProps, highlightedIndex } = downshift;
  const isSelected = createSelectedDeterminer(downshift);

  return (option, index) => {
    let result;
    if (option && option.render !== undefined) {
      result = option.render(option);
    } else if (renderOption !== undefined) {
      result = renderOption(option);
    } else {
      const itemProps = getItemProps({
        index,
        key: `option-${index}`,
        item: option,
        selected: isSelected(option),
        highlighted: highlightedIndex === index
      });

      result = (
        <OptionPresenter {...itemProps}>{formatOption(option)}</OptionPresenter>
      );
    }
    return result;
  };
}

/** @typedef {DownshiftHelpers & { options: OptionMeta[] }} RenderOptionsProps */

/**
 * @param {RenderOptionsProps} props
 * @todo Convert into a functional component once `React.Fragment` can be used
 */
export default function renderOptions(props) {
  const {
    formatOption = option => String(option),
    getItemProps = itemProps => itemProps,
    highlightedIndex,
    multiple = false,
    options = [],
    renderOption,
    selectedItem,
    selectedItems = []
  } = props;
  const downshift = {
    formatOption,
    getItemProps,
    highlightedIndex,
    multiple,
    selectedItem,
    selectedItems
  };

  const optionRenderer = createOptionRenderer(downshift, renderOption);

  return options.map(optionRenderer);
}
