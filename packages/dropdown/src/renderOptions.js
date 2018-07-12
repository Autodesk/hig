import React from "react";

import OptionPresenter from "./presenters/OptionPresenter";

function createSelectedDeterminer(context) {
  const { selectedItem, selectedItems } = context;

  return option => option === selectedItem || selectedItems.includes(option);
}

function createOptionRenderer(context) {
  const { getItemProps, highlightedIndex } = context;
  const isSelected = createSelectedDeterminer(context);

  return (option, index) => {
    const { label, value } = option;
    const itemProps = getItemProps({
      index,
      key: value,
      item: option,
      selected: isSelected(option),
      highlighted: highlightedIndex === index
    });

    return <OptionPresenter {...itemProps}>{label}</OptionPresenter>;
  };
}

/**
 *
 * @param {*} props
 * @todo Convert to a functional component once `React.Fragment` can be used
 */
export default function renderOptions(props) {
  const {
    options = [],
    getItemProps = itemProps => itemProps,
    highlightedIndex,
    selectedItem,
    selectedItems = []
  } = props;
  const context = {
    getItemProps,
    highlightedIndex,
    selectedItem,
    selectedItems
  };
  const renderOption = createOptionRenderer(context);

  return options.map(renderOption);
}
