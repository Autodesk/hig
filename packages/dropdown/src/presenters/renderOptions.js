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
  const { selectedItem, selectedItems } = downshift;

  return option => {
    if (selectedItems) {
      return selectedItems.includes(option);
    }

    return option === selectedItem;
  };
}

/**
 * @param {DownshiftHelpers} downshift
 * @returns {function(OptionMeta, number): JSX.Element}
 */
function createOptionRenderer(downshift) {
  const { formatOption, getItemProps, highlightedIndex } = downshift;
  const isSelected = createSelectedDeterminer(downshift);

  return (option, index) => {
    const itemProps = getItemProps({
      index,
      key: `option-${index}`,
      item: option,
      selected: isSelected(option),
      highlighted: highlightedIndex === index
    });

    return (
      <OptionPresenter {...itemProps}>{formatOption(option)}</OptionPresenter>
    );
  };
}

/** @typedef {DownshiftHelpers & { options: OptionMeta[] }} RenderOptionsProps */

/**
 *
 * @param {RenderOptionsProps} props
 * @todo Convert into a functional component once `React.Fragment` can be used
 */
export default function renderOptions(props) {
  const {
    options = [],
    formatOption = option => String(option),
    getItemProps = itemProps => itemProps,
    highlightedIndex,
    selectedItem,
    selectedItems = []
  } = props;
  const downshift = {
    formatOption,
    getItemProps,
    highlightedIndex,
    selectedItem,
    selectedItems
  };
  const renderOption = createOptionRenderer(downshift);

  return options.map(renderOption);
}
