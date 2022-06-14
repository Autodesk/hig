import React, {forwardRef, useRef, useEffect} from 'react';

export const MultiCheckbox = forwardRef(({indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  const { onChange, columnHeaderArray, headerName, setColumnHeaderArray, ...otherProps} = rest;
  const handleChange = (event) => {
    const headerArray = [...columnHeaderArray];

    if (event.currentTarget.checked) {
      headerArray.push(headerName);
      setColumnHeaderArray(headerArray);
    } else {
      setColumnHeaderArray(headerArray.filter(header => header !== headerName));
    }
    onChange(event);
  }

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...otherProps} onChange={handleChange} />
    </>
  )
});
