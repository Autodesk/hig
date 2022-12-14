import React, {forwardRef, useRef, useEffect, useLayoutEffect} from 'react';

export const MultiRowSelectCheckbox = forwardRef(({indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  const { onChange, rowIndex, selectArray, setActiveMultiSelectRowArray, ...otherProps } = rest;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  const handleChange = (event) => {
    onChange(event);
    const selectedArray = selectArray?.length ? [...selectArray] : [];
    if (!selectedArray.includes(rowIndex)) {
      selectedArray.push(rowIndex);
      setActiveMultiSelectRowArray(selectedArray);
    } else {
      setActiveMultiSelectRowArray(selectArray.filter((row) => row !== rowIndex));
    }
  }

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...otherProps} onChange={handleChange} />
    </>
  )
});
