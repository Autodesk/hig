import { useCallback, useEffect, useState } from "react";

const verticalScrollInViewport = (cell) => {
  const cellBounding = cell.getBoundingClientRect();

  if (
    cellBounding.top < 0 ||
    cellBounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // align to the top if the top of cell is out of the viewport
    if (cellBounding.top < 0) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
    // align to the bottom if the bottom of cell is out of the viewport
    if (
      cellBounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }
};

const horizontalScrollInViewport = (cell) => {
  const cellBounding = cell.getBoundingClientRect();

  if (
    cellBounding.left < 0 ||
    cellBounding.right >
      (window.innerWidth || document.documentElement.clientWidth)
  ) {
    if (cellBounding.left < 0) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
    if (
      cellBounding.right >
      (window.innerWidth || document.documentElement.clientWidth)
    ) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
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

const getCellObject = (activeColumnIndex, activeRowIndex) =>
  `[data-cell-coords="${activeColumnIndex}_${activeRowIndex}"]`;

const getHeaders = (columns) => {
  const headers = columns.map((item) => {
    if (item.columns) {
      return getHeaders(item.columns);
    }
    return item.Header;
  });

  return [].concat(...headers);
};

export default function TableBehavior(props) {
  const { paginateDynamic, tableObject, ...otherProps } = props;
  const { onKeyDown } = otherProps;
  const [totalRows, setTotalRows] = useState(tableObject.data.length);
  // An array of Header title strings
  const [columnHeaderArray, setColumnHeaderArray] = useState(
    getHeaders(tableObject.columns)
  );
  const [activeColumnIndex, setActiveColumnIndex] = useState(null);
  const [activeMultiSelectColumn, setActiveMultiSelectColumn] = useState(null);
  const [activeMultiSelectRowArray, setActiveMultiSelectRowArray] =
    useState(null);
  const [allMultiSelectedRows, setAllMultiSelectedRows] = useState(false);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [internalTableRef, setInternalTableRef] = useState(null);
  const [internalHeaderRef, setInternalHeaderRef] = useState(null);
  // An array of the header objects from react-table
  const [globalColumns, setGlobalColumns] = useState(null);
  const [globalResizeStyles, setGlobalResizeStyles] = useState(null);

  const setTableRef = (element) => {
    if (props.tableRef) {
      props.tableRef(element);
    }
    setInternalTableRef(element);
  };

  const setHeaderRef = (element) => {
    setInternalHeaderRef(element);
  };

  const handleKeyDown = useCallback(
    (event) => {
      const { columnSelection, rowHeight, rowSelection } = props;
      const columnStart = rowSelection ? -1 : 0;
      const rowStart = columnSelection ? -1 : 0;
      const headerMultiplier = internalHeaderRef?.children?.length;
      const height = Number(rowHeight.replace("px", ""));
      const scrollDownOffset = headerMultiplier * height + 1;

      if (onKeyDown) {
        onKeyDown(event);
      }
      setActiveMultiSelectColumn(null);
      if (!activeColumnIndex) {
        setActiveColumnIndex(0);
      }
      if (!activeRowIndex) {
        setActiveRowIndex(0);
      }
      switch (event.code) {
        case "ArrowDown":
          if (totalRows !== activeRowIndex + 1) {
            setActiveRowIndex(activeRowIndex + 1);
            checkVerticalScroll(
              document.querySelector(
                getCellObject(activeColumnIndex, activeRowIndex + 1)
              ),
              internalTableRef,
              scrollDownOffset
            );
          }
          event.preventDefault();
          break;
        case "ArrowUp":
          if (
            (activeRowIndex !== rowStart && activeColumnIndex !== -1) ||
            (activeColumnIndex === -1 && activeRowIndex >= 0)
          ) {
            setActiveRowIndex(activeRowIndex - 1);
            checkVerticalScroll(
              document.querySelector(
                getCellObject(activeColumnIndex, activeRowIndex - 1)
              ),
              internalTableRef,
              scrollDownOffset
            );
          }
          event.preventDefault();
          break;
        case "ArrowLeft":
          if (activeColumnIndex !== columnStart) {
            setActiveColumnIndex(activeColumnIndex - 1);
            checkHorizontalScroll(
              document.querySelector(
                getCellObject(activeColumnIndex - 1, activeRowIndex)
              ),
              internalTableRef
            );
          }
          event.preventDefault();
          break;
        case "ArrowRight":
          if (columnHeaderArray.length !== activeColumnIndex + 1) {
            setActiveColumnIndex(activeColumnIndex + 1);
            checkHorizontalScroll(
              document.querySelector(
                getCellObject(activeColumnIndex + 1, activeRowIndex)
              ),
              internalTableRef
            );
          }
          event.preventDefault();
          break;
        case "Enter":
          if (activeRowIndex > -1 && activeColumnIndex === -1) {
            /**
             * Look into consolidating this w/ the row select onClick
             */
            const newArray = activeMultiSelectRowArray?.includes(activeRowIndex)
              ? activeMultiSelectRowArray.filter(
                  (item) => item !== activeRowIndex
                )
              : (activeMultiSelectRowArray && [...activeMultiSelectRowArray]) ||
                [];

            if (!activeMultiSelectRowArray?.includes(activeRowIndex)) {
              newArray.push(activeRowIndex);
            }
            if (totalRows === newArray.length) {
              setAllMultiSelectedRows(true);
            } else {
              setAllMultiSelectedRows(false);
            }
            setActiveMultiSelectRowArray(newArray);
          }
          if (activeRowIndex === -1 && activeColumnIndex === -1) {
            const allArray = tableObject.data.map((row, index) => index);
            const emptyArray = [];

            if (allMultiSelectedRows || activeMultiSelectRowArray?.length > 0) {
              setActiveMultiSelectRowArray(emptyArray);
              setAllMultiSelectedRows(false);
            } else {
              setActiveMultiSelectRowArray(allArray);
              setAllMultiSelectedRows(true);
            }
          }
          if (columnSelection && activeColumnIndex > -1) {
            setActiveMultiSelectColumn(activeColumnIndex);
          }
          break;
        default:
          break;
      }
    },
    [
      activeColumnIndex,
      activeMultiSelectRowArray,
      activeRowIndex,
      allMultiSelectedRows,
      setActiveRowIndex,
      setActiveColumnIndex,
    ]
  );

  useEffect(() => {
    if (tableObject?.initialState?.hiddenColumns) {
      const columnHeaderArrayCopy = columnHeaderArray.filter(
        (val) => !tableObject?.initialState?.hiddenColumns.includes(val)
      );
      setColumnHeaderArray(columnHeaderArrayCopy);
    } else {
      setColumnHeaderArray(getHeaders(tableObject.columns));
    }
  }, [tableObject]);

  return props.children({
    activeColumnIndex,
    activeRowIndex,
    activeMultiSelectColumn,
    activeMultiSelectRowArray,
    allMultiSelectedRows,
    columnHeaderArray,
    handleKeyDown,
    setActiveColumnIndex,
    setActiveRowIndex,
    setActiveMultiSelectColumn,
    setActiveMultiSelectRowArray,
    setAllMultiSelectedRows,
    setColumnHeaderArray,
    setHeaderRef,
    setTableRef,
    setTotalRows,
    globalColumns,
    setGlobalColumns,
    globalResizeStyles,
    setGlobalResizeStyles,
  });
}
