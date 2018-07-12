import React from "react";

import Option from "./Option";

/**
 * @typedef {Object} OptionMeta
 * @property {string} label Displayed value
 * @property {string} value
 * @property {Function} [toJSON] Value serialization
 */

/** @typedef {import("downshift").ControllerStateAndHelpers} DownshiftHelpers */

/**
 * @param {DownshiftHelpers} downshift
 * @returns {function(OptionMeta): boolean}
 */
function createSelectedDeterminer(downshift) {
  const { selectedItem, selectedItems } = downshift;

  return option => option === selectedItem || selectedItems.includes(option);
}

/**
 * @param {DownshiftHelpers} downshift
 * @returns {function(OptionMeta, number): JSX.Element}
 */
function createOptionRenderer(downshift) {
  const { getItemProps, highlightedIndex } = downshift;
  const isSelected = createSelectedDeterminer(downshift);

  return (option, index) => {
    const { label, value } = option;
    const itemProps = getItemProps({
      index,
      key: value,
      item: option,
      selected: isSelected(option),
      highlighted: highlightedIndex === index
    });

    return <Option {...itemProps}>{label}</Option>;
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
    getItemProps = itemProps => itemProps,
    highlightedIndex,
    selectedItem,
    selectedItems = []
  } = props;
  const downshift = {
    getItemProps,
    highlightedIndex,
    selectedItem,
    selectedItems
  };
  const renderOption = createOptionRenderer(downshift);

  return options.map(renderOption);
}
