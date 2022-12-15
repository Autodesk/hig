/* eslint-disable import/prefer-default-export */
/* eslint-disable react/forbid-prop-types */
import React, { forwardRef, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const MultiRowSelectCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;
    const {
      onChange,
      rowIndex,
      selectArray,
      setActiveMultiSelectRowArray,
      onApplication,
      ...otherProps
    } = rest;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

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
          externalMenu: { selectedArray: selectArray.filter((row) => row !== rowIndex), count: rowIndex },
        });
      }
    };

    return (
      <input
        type="checkbox"
        ref={resolvedRef}
        {...otherProps}
        onChange={handleChange}
      />
    );
  }
);

MultiRowSelectCheckbox.propTypes = {
  indeterminate: PropTypes.any,
};
