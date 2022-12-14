import React, {forwardRef, useRef, useEffect, useLayoutEffect} from 'react';

export const MultiRowSelectCheckbox = forwardRef(({indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
    const { onChange, selectArray, setActiveMultiSelectRowArray, ...otherProps } = rest;
  console.log('selectArrayMulti', selectArray)
  const handleChange = (event) => {
    onChange(event);
    const selectedArray = [...selectArray];
    console.log('selectedArray Inside', selectedArray)
    setActiveMultiSelectRowArray(selectedArray);
    // setActiveMultiSelectRowArray((prevState) => {console.log('previous state', prevState)} );
  }

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...otherProps} onChange={handleChange} />
    </>
  )
});
