import React, {forwardRef, useRef, useEffect, useLayoutEffect} from 'react';

export const MultiRowSelectCheckbox = forwardRef(({indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  const { onChange, rowIndex, selectArray, setActiveMultiSelectRowArray, ...otherProps } = rest;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  const handleChange = (event) => {
    console.log(rowIndex);
    onChange(event);
    const selectedArray = selectArray?.length ? [...selectArray] : [];
    if (!selectedArray.includes(rowIndex)) {
      selectedArray.push(rowIndex);
    } else {
      
    }
    // setActiveMultiSelectRowArray(selectedArray);
    setActiveMultiSelectRowArray(selectedArray);
  }

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...otherProps} onChange={handleChange} />
    </>
  )
});
