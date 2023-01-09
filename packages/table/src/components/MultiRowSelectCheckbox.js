/* eslint-disable import/prefer-default-export */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@hig/checkbox";

export const MultiRowSelectCheckbox = ({ indeterminate, ...rest }) => {
  const {
    onChange,
    rowIndex,
    selectArray,
    setActiveMultiSelectRowArray,
    onApplication,
    ...otherProps
  } = rest;

  const handleChange = (event) => {
    onChange(event);
    const selectedArray = selectArray?.length ? [...selectArray] : [];
    if (!selectedArray.includes(rowIndex)) {
      selectedArray.push(rowIndex);
      setActiveMultiSelectRowArray(selectedArray);
      onApplication({
        externalMenu: { selectedArray, count: rowIndex },
      });
    } else {
      setActiveMultiSelectRowArray(
        selectArray.filter((row) => row !== rowIndex)
      );
      onApplication({
        externalMenu: {
          selectedArray: selectArray.filter((row) => row !== rowIndex),
          count: rowIndex,
        },
      });
    }
  };

  return (
    <Checkbox
      {...otherProps}
      indeterminate={indeterminate}
      onClick={handleChange}
    />
  );
};

MultiRowSelectCheckbox.propTypes = {
  indeterminate: PropTypes.any,
};
