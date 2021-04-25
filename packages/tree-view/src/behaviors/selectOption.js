export default function selectOption(optionId, activeOptionsArray, multiple) {
  const selectedOptions = activeOptionsArray;

  if (selectedOptions.indexOf(optionId) === -1) {
    if (!multiple) {
      selectedOptions.length = 0;
    }

    selectedOptions.unshift(optionId);
  } else if (selectedOptions.indexOf(optionId) > -1) {
    if (multiple) {
      selectedOptions.splice(selectedOptions.indexOf(optionId), 1);
    } else {
      selectedOptions.length = 0;
    }
  }

  return selectedOptions;
}
