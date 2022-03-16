import React, { useCallback, useEffect, useState } from "react";

const verticalScrollInViewport = (cell) => {
  const cellBounding = cell.getBoundingClientRect();

  if (
    cellBounding.top < 0 ||
    cellBounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // align to the top if the top of cell is out of the viewport
    if (cellBounding.top < 0) {
      cell.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }
    // align to the bottom if the bottom of cell is out of the viewport
    if (
    cellBounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight)
    ) {
      cell.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }
  }
};

const horizontalScrollInViewport = (cell) => {
  const cellBounding = cell.getBoundingClientRect();

  if (
    cellBounding.left < 0 ||
    cellBounding.right >
    (window.innerWidth || dcoument.documentElement.clientWidth)
  ) {
    if (cellBounding.left < 0) {
          cell.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }
    if (
    cellBounding.right >
    (window.innerWidth || document.documentElement.clientWidth)
    ) {
      cell.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }
  }
};

const verticalScrollInContainer = (cell, table, bottomOffset) => {
  if (cell && table.scrollHeight > table.clientHeight) {
    const scrollBottom = table.clientHeight + table.scrollTop;
    const elementBottom = cell.offsetTop + cell.offsetHeight;

    if (elementBottom + bottomOffset > scrollBottom) {
      // eslint-disable-next-line no-param-reassign
      table.scrollTop = elementBottom + bottomOffset - table.clientHeight;
    }
    if (cell.offsetTop < table.scrollTop) {
      // eslint-disable-next-line no-param-reassign
      table.scrollTop = cell.offsetTop;
    }
  }
};

const horizontalScrollInContainer = (cell, table) => {
  if (cell && table.scrollWidth > table.clientWidth) {
    const scrollRight = table.clientWidth + table.scrollLeft;
    const elementRight = cell.offsetLeft + cell.offsetWidth;
    if (elementRight > scrollRight) {
      // eslint-disable-next-line no-param-reassign
      table.scrollLeft = elementRight - table.clientWidth;
    }
    if (cell.offsetLeft < table.scrollLeft) {
      // eslint-disable-next-line no-param-reassign
      table.scrollLeft = cell.offsetLeft;
    }
  }
};

const checkVerticalScroll = (cellObject, table, bottomOffset) => {
  verticalScrollInViewport(cellObject);
  verticalScrollInContainer(cellObject, table, bottomOffset);
};

const checkHorizontalScroll = (cellObject, table) => {
  horizontalScrollInViewport(cellObject);
  horizontalScrollInContainer(cellObject, table);
};

const getCellObject = (activeColumnIndex, activeRowIndex) => {
  // data-cell-coords={`${cellColumnIndex}_${cellRowIndex}`}
  return `[data-cell-coords="${activeColumnIndex}_${activeRowIndex}"]`;
}

const getHeaders = (columns) => {
  const test = columns.map(item => {
    if (item.columns) {
          return getHeaders(item.columns);
    } else {
          return item.Header;
    }
  });

  return [].concat.apply([], test);
};

export default function TableBehavior(props) {
	const {paginateDynamic, tableObject, ...otherProps} = props;
  const {onBlur, onFocus, onKeyDown} = otherProps;
  const [getTotalRows, setTotalRows] = useState(tableObject.data.length)
	const [getColumnHeaderArray, setColumnHeaderArray] = useState(getHeaders(tableObject.columns));
	const [getActiveColumnIndex, setActiveColumnIndex] = useState(null);
  const [getActiveMultiSelectColumn, setActiveMultiSelectColumn] = useState(null);
  const [getActiveMultiSelectRowArray, setActiveMultiSelectRowArray] = useState(null);
  const [getAllMultiSelectedRows, setAllMultiSelectedRows] = useState(false);
	// const [getHighlightColumnIndex, setHighlightColumnIndex] = useState(null);
	const [getActiveRowIndex, setActiveRowIndex] = useState(null);
	// const [getHighlightRowIndex, setHighlightRowIndex] = useState(null);
  const [getInternalTableRef, setInternalTableRef] = useState(null);
  const [getInternalHeaderRef, setInternalHeaderRef] = useState(null);

  const setTableRef = element => {
    if (props.tableRef) {
          props.tableRef(element);
    }
    
    setInternalTableRef(element);
  };

  const setHeaderRef = element => {
    setInternalHeaderRef(element);
  };

  // const handleBlur = useCallback((event) => {
  //   if (onBlur) {
  //         onBlur(event);
  //   }
  //   /**
  //    * Currently there is no deselection
  //    * maybe we should do this when a user leaves focus
  //    * that way there won't always be a visible selected cell
  //    */
  // }, []);

  // const handleFocus = useCallback((event) => {
  //   if (onFocus) {
  //         onFocus(event);
  //   }
  //   // if (!getActiveColumnIndex) {
  //   //       setActiveColumnIndex(0);
  //   // }
  //   // if (!getActiveRowIndex) {
  //   //       setActiveRowIndex(0);
  //   // }
  // }, [getActiveColumnIndex, getActiveRowIndex, setActiveColumnIndex, setActiveRowIndex]);

  const handleKeyDown = useCallback((event) => {
    // const currentHighlightColumnIndex = getHighlightColumnIndex || 0;
    // const currentHighlightRowIndex = getHighlightRowIndex || 0;
    const { columnSelection, rowHeight, rowSelection } = props;
    const columnStart = rowSelection ? -1 : 0;
    const rowStart = columnSelection ? -1 : 0;
    const headerMultiplier = getInternalHeaderRef?.children?.length;
    const height = Number(rowHeight.replace('px', ''));
    const scrollDownOffset = headerMultiplier * height + 1;

    if (onKeyDown) {
      onKeyDown(event);
    }
    setActiveMultiSelectColumn(null);
    if (!getActiveColumnIndex) {
          setActiveColumnIndex(0);
    }
    if (!getActiveRowIndex) {
          setActiveRowIndex(0);
    }
    switch (event.keyCode) {
      // Arrow Down
      case 40:
        if (getTotalRows !== getActiveRowIndex + 1) {
          setActiveRowIndex(getActiveRowIndex + 1);
          checkVerticalScroll(
            document.querySelector(getCellObject(getActiveColumnIndex, getActiveRowIndex + 1)),
            getInternalTableRef,
            scrollDownOffset
          );
        }
        event.preventDefault();
        break;
      // Arrow Up
      case 38:
        if (
          (getActiveRowIndex !== rowStart && getActiveColumnIndex !== -1) ||
          (getActiveColumnIndex === -1 && getActiveRowIndex >= 0)
        ) {
          setActiveRowIndex(getActiveRowIndex - 1)
          checkVerticalScroll(
            document.querySelector(getCellObject(getActiveColumnIndex, getActiveRowIndex - 1)),
            getInternalTableRef,
            scrollDownOffset
          );
        }
        event.preventDefault();
        break;
      // Arrow Left
      case 37:
        if (getActiveColumnIndex !== columnStart) {
          setActiveColumnIndex(getActiveColumnIndex - 1);
          checkHorizontalScroll(
                document.querySelector(getCellObject(getActiveColumnIndex - 1, getActiveRowIndex)),
                getInternalTableRef
          );
        }
        event.preventDefault();
        break;
      // Arrow Right
      case 39:
        if (getColumnHeaderArray.length !== getActiveColumnIndex + 1) {
          setActiveColumnIndex(getActiveColumnIndex + 1);
          checkHorizontalScroll(
            document.querySelector(getCellObject(getActiveColumnIndex + 1, getActiveRowIndex)),
            getInternalTableRef
          );
        }
        event.preventDefault();
        break;
      // Enter Key
      case 13:
        if (getActiveRowIndex > -1) {
          /**
           * Look into consolidating this w/ the row select onClick
           */
          const newArray = getActiveMultiSelectRowArray?.includes(getActiveRowIndex)
            ? getActiveMultiSelectRowArray.filter(item => item !== getActiveRowIndex)
            : getActiveMultiSelectRowArray && [...getActiveMultiSelectRowArray] || [];

          if (!getActiveMultiSelectRowArray?.includes(getActiveRowIndex)) {
            newArray.push(getActiveRowIndex);
          }
          if (getTotalRows === newArray.length) {
            setAllMultiSelectedRows(true);
          } else {
            setAllMultiSelectedRows(false);
          }
          setActiveMultiSelectRowArray(newArray);
        } 
        if (getActiveRowIndex === -1 && getActiveColumnIndex === -1) {
          const allArray = tableObject.data.map((row, index) => index);
          const emptyArray = [];

          if (getAllMultiSelectedRows || getActiveMultiSelectRowArray?.length > 0) {
            setActiveMultiSelectRowArray(emptyArray);
            setAllMultiSelectedRows(false);
          } else {
            setActiveMultiSelectRowArray(allArray);
            setAllMultiSelectedRows(true);
          }
        }
        if (columnSelection && getActiveColumnIndex > -1) {
          setActiveMultiSelectColumn(getActiveColumnIndex);
        }
        break;
      default:
        return;
    }
  }, [getActiveColumnIndex, getActiveMultiSelectRowArray, getActiveRowIndex, getAllMultiSelectedRows, setActiveRowIndex, setActiveColumnIndex]);

  useEffect(() => {
    setColumnHeaderArray(getHeaders(tableObject.columns));
  }, [tableObject]);

	return props.children({
    getActiveColumnIndex,
    getActiveRowIndex,
    getActiveMultiSelectColumn,
    getActiveMultiSelectRowArray,
    getAllMultiSelectedRows,
    getColumnHeaderArray,
    handleKeyDown,
    setActiveColumnIndex,
    setActiveRowIndex,
    setActiveMultiSelectColumn,
    setActiveMultiSelectRowArray,
    setAllMultiSelectedRows,
    setHeaderRef,
    setTableRef,
    setTotalRows,
  });
}
