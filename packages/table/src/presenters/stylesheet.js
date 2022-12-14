export default function stylesheet(props, themeData, themeMeta) {
  const {
    alternateBg,
    cellColumnIndex,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    hasHover,
    headerBackgroundColor,
    headerIndex,
    isLast,
    isPressed,
    isResizing,
    isStickyColumn,
    isStickyHeader,
    multiSelectedColumn,
    multiSelectedColumnLeft,
    multiSelectedRow,
    multiSelectedRowBottom,
    rowIndex,
    rowSelection,
    selected,
    selectedBottom,
    selectedLeft,
    customStylesheet,
    isGrouped,
    isSubRows,
    isTreeGrid,
  } = props;
  const isHighDensity = themeMeta?.densityId === `high-density`;
  const alternateBgColor =
    rowIndex % 2 === 0
      ? themeData["table.row.backgroundColor"]
      : themeData["table.zebraStripe.backgroundColor"];

  const styles = {
    higTable: {
      color: themeData["table.fontColor"],
      // display: isGrouped ? "block" : "inline-block",
      display: "block",
      maxWidth: "100%",
      overflowX: "hidden",
      overflowY: "hidden",
      fontFamily: themeData["table.fontFamily"],
      fontSize: themeData["table.fontSize"],
      fontWeight: themeData["table.cell.fontWeight"],
      lineHeight: themeData["table.lineHeight"],
      outline: 0,
      position: `relative`,
      ...(isStickyColumn || isStickyHeader ? { overflow: `auto` } : {}),
    }, 
    higTableHold: {
      display: "none",
    },
    higTableRow: {
      boxSizing: `border-box`,
      width: `100%`,
      ...(alternateBg
        ? {
            background: alternateBgColor,
          }
        : {
            background: themeData["table.row.backgroundColor"],
          }),
    },
    higTableHeaderWrapper: {
      ...(isStickyColumn || isStickyHeader
        ? {
            position: `sticky`,
            top: 0,
            zIndex: 10,
          }
        : {}),
      ...(isGrouped ? { borderBottom: `1px solid #ddd` } : {}),
    },
    higTableHeader: {
      backgroundColor:
        headerBackgroundColor || themeData["colorScheme.surface.level100"],
      fontWeight: themeData["table.cell.fontWeight"],
      margin: 0,
      opacity: 1,
      position: `relative`,
      ...(selected
        ? {
            "&[data-cell-coords]": {
              backgroundColor:
                themeData["table.header.unselected.hover.backgroundColor"],
            },
          }
        : {}),
      "&:first-of-type": {
        "& > div": {
          borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
        },
      },
    },
    higTableHeaderContentWrapper: {
      alignItems: `center`,
      backgroundColor: themeData["table.header.backgroundColor"],
      borderTop: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      borderRight: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      boxSizing: `border-box`,
      display: `flex`,
      height: themeData["table.cell.minHeight"],
      lineHeight: themeData["table.cell.minHeight"],
      padding: `0 ${themeData["table.cell.paddingHorizontal"]}`,
      transition: `background-color 0.1s ease-in-out`,
      ...(columnSelection && hasHover
        ? {
            backgroundColor:
              themeData["table.header.unselected.hover.backgroundColor"],
          }
        : {}),
      ...(columnSelection && isPressed
        ? {
            backgroundColor:
              themeData["table.header.unselected.pressed.backgroundColor"],
          }
        : {}),
      ...(headerIndex >= 0
        ? {
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
          }
        : {}),
      ...(rowSelection && headerIndex < 0
        ? {
            justifyContent: `center`,
          }
        : {}),
    },
    higTableHeaderRow: {
      "&:not(:last-child)": {
        pointerEvents: `none`,
      },
    },
    higTableHeaderResizer: {
      background: `transparent`,
      display: `flex`,
      height: `100%`,
      justifyContent: `center`,
      position: `absolute`,
      right: `-2px`,
      top: 0,
      touchAction: `none`,
      transition: `background-color 0.1s ease-in-out`,
      width: `5px`,
      zIndex: 1,
      ...(isResizing
        ? {
            "&::before": {
              content: `""`,
              borderRight: `1px solid ${
                themeData[`table.resize.pressed.borderColor`]
              }`,
            },
          }
        : {}),
    },
    higTableBody: {
      position: `relative`,
      ...(frozenHeader
        ? {
            maxHeight: `calc((${themeData["table.cell.minHeight"]} * ${
              frozenHeaderCount || 50
            }) + 1px)`,
          }
        : {}),
    },
    higTableCell: {
      alignItems: `center`,
      // borderRight: isSubRows || isTreeGrid ? `none` : `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      // borderTop: isSubRows ? `1px solid rgba(60,60,60,.1)` : `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      borderRight: isSubRows || isTreeGrid ? `none` : `none`,
      borderTop: isSubRows ? `1px solid rgba(60,60,60,.1)` : `none`,
      backgroundColor: isSubRows ? `#ebebeb` : '',
      boxSizing: `border-box`,
      display: `flex`,
      height: themeData["table.cell.minHeight"],
      margin: 0,
      opacity: 1,
      padding: `${themeData["table.cell.paddingVertical"]} ${themeData["table.cell.paddingHorizontal"]}`,
      position: `relative`,
      transition: `background-color 0.1s ease-in-out`,
      ...(isResizing
        ? {
            borderRight: `1px solid ${themeData["table.resize.pressed.borderColor"]}`,
          }
        : {}),
      ...(isLast
        ? {
            borderBottom: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
          }
        : {}),
      ...(cellColumnIndex === -1
        ? {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        : {}),
      ...(hasHover && cellColumnIndex !== -1
        ? {
            backgroundColor:
              isTreeGrid ? `none` : themeData["table.row.unselected.hover.backgroundColor"],
          }
        : {}),
      ...(isPressed && cellColumnIndex !== -1
        ? {
            backgroundColor:
              isSubRows ? `#ebebeb` : isTreeGrid ? `none` : themeData["table.cell.unselected.pressed.backgroundColor"],
          }
        : {}),
      ...(selected
        ? {
            backgroundColor: isSubRows ? `#ebebeb` : `transparent`,
            borderRight: isSubRows || isTreeGrid ? `none` : `1px solid ${themeData["table.row.selected.default.borderColor"]}`,
            borderTop: isSubRows || isTreeGrid ? `1px solid rgba(60,60,60,.1)` : `1px solid ${themeData["table.row.selected.default.borderColor"]}`,
          }
        : {}),
      ...(selected && isLast
        ? {
            borderBottom: `1px solid ${themeData["table.row.selected.default.borderColor"]}`,
          }
        : {}),
      ...(selectedBottom && !isSubRows && !isTreeGrid
        ? {
            // borderTop: `1px solid ${themeData["table.row.selected.default.borderColor"]}`,
            borderTop: `1px solid transparent`,
          }
        : {}),
      ...(selectedLeft
        ? {
            borderRight: isSubRows || isTreeGrid ? `none` : `1px solid ${themeData["table.row.selected.default.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedColumn
        ? {
            backgroundColor:
              themeData["table.cell.multiSelect.default.backgroundColor"],
            borderRight: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedColumn && isLast
        ? {
            borderBottom: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedColumnLeft
        ? {
            borderRight: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedRow
        ? {
            backgroundColor:
            themeData["table.cell.multiSelect.default.backgroundColor"],
            borderTopColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedRowBottom
        ? {
            borderTopColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedRow && multiSelectedRowBottom
        ? {
            borderTopColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      ...(multiSelectedRow && isLast
        ? {
            borderBottomColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`,
          }
        : {}),
      "&:first-of-type": {
        borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
        ...(selected
          ? {
              borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["table.row.selected.default.borderColor"]}`,
            }
          : {}),
        ...(multiSelectedColumn
          ? {
              borderLeft: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`,
            }
          : {}),
      },
      "&:last-of-type": {
        borderLeft: `none`,
        ...(multiSelectedColumn
          ? {
              borderRight: `${themeData["table.borderWidth"]} solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`,
            }
          : {}),
      },
    },
    higTableCellContentWrapper: {
      display: `flex`,
      ...(cellColumnIndex >= 0
        ? {
            display: `block`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
          }
        : {}),
    },
    higTableCustomExpander: {
      display: `block`,
      borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      borderRight: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
    },
    headerHolder: {
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      minWidth: `10px`,
    },
    headerHolderSelection: {
      display: `flex`,
    },
    groupHeaderElement: {
      padding: `3px 3px 0 0`,
    },
    higGroupedLabel: {
      display: `flex`,
    },
    higGroupedDataCount: {
      paddingLeft: `5px`,
      fontWeight: `500`,
    },
    higGroupedCheckToggle: {
      position: `absolute`,
      left: isHighDensity ? `12px` : `10px`,
      paddingTop: isHighDensity ? `2px` : `0`,
    },
    higSubRowWrap: {
      display: `flex`,
      fontWeight: `900`,
    },
    higSubRowGridWrap: {
      display: `flex`,
    },
    higSubRowControls: {
      display: `inline-block`,
      width: `20px`,
    },
  };

  return customStylesheet
    ? customStylesheet(styles, props, themeData, themeMeta)
    : styles;
}
