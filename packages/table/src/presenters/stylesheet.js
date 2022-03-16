export default function stylesheet(props, themeData, metadata) {
	const {
		alternateBg,
		cellColumnIndex,
		columnSelection,
		frozenHeader,
		frozenHeaderCount,
		hasHover,
		headerBackgroundColor,
		headerIndex,
		isCustomeContentExpanded,
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
		selected,
		selectedBottom,
		selectedLeft,
	} = props;

	const alternateBgColor = rowIndex % 2 === 0 ? themeData["table.row.backgroundColor"] : themeData["table.zebraStripe.backgroundColor"];

	return {
		higTable: {
			color: themeData['table.fontColor'],
			fontFamily: themeData['table.fontFamily'],
			fontSize: themeData['table.fontSize'],
			fontWeight: themeData['table.cell.fontWeight'],
			lineHeight: themeData['table.lineHeight'],
			outline: 0,
			position: `relative`,
			...(isStickyColumn || isStickyHeader ? {overflow: `auto`} : {})
		},
		higTableRow: {
			boxSizing: `border-box`,
			width: `100%`,
			...(alternateBg ? {background: alternateBgColor} : {background: themeData["table.row.backgroundColor"]}),
		},
		higTableHeaderWrapper: {
			...(isStickyColumn || isStickyHeader
				? {
					position: `sticky`,
					top: 0,
          zIndex: 10
				}
				: {}
			)
		},
		higTableHeader: {
			backgroundColor: headerBackgroundColor ? headerBackgroundColor : themeData['colorScheme.surface.level100'],
			fontWeight: themeData['table.cell.fontWeight'],
			margin: 0,
			opacity: 1,
			position: `relative`,
			...(selected 
				? {
					"&[data-cell-coords]": {
						backgroundColor: themeData['table.header.unselected.hover.backgroundColor']
					}
				} 
				: {}),
			"&:first-of-type": {
				"& > div": {
					borderLeft: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`
				}
			}
		},
		higTableHeaderContentWrapper: {
			alignItems: `center`,
			backgroundColor: themeData['table.header.backgroundColor'],
			borderTop: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
			borderRight: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
			boxSizing: `border-box`,
			display: `flex`,
			height: themeData['table.cell.minHeight'],
			justifyContent: `center`,
			lineHeight: themeData['table.cell.minHeight'],
			padding: `0 ${themeData['table.cell.paddingHorizontal']}`,
			transition: `background-color 0.1s ease-in-out`,
			...(columnSelection && hasHover ? {backgroundColor: themeData['table.header.unselected.hover.backgroundColor']} : {}),
			...(columnSelection && isPressed ? {backgroundColor: themeData['table.header.unselected.pressed.backgroundColor']} : {}),
			...(headerIndex >= 0 ?
				{
					display: `block`,
					overflow: `hidden`,
					textOverflow: `ellipsis`,
					whiteSpace: `nowrap`
				} :
				{}
			)
		},
		higTableHeaderRow: {
			"&:not(:last-child)": {
				pointerEvents: `none`
			}
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
              borderRight: `1px solid ${themeData[`table.resize.pressed.borderColor`]}`
            }
          }
				: {}
			)
		},
		higTableBody: {
			position: `relative`,
			...(frozenHeader ? {
					maxHeight: `calc((${themeData['table.cell.minHeight']} * ${frozenHeaderCount || 50}) + 1px)`
				} :
				{}
			)
		},
		higTableCell: {
			alignItems: `center`,
			borderRight: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
			borderTop: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
			boxSizing: `border-box`,
			display: `flex`,
			height: themeData['table.cell.minHeight'],
			margin: 0,
			opacity: 1,
			padding: `${themeData['table.cell.paddingVertical']} ${themeData['table.cell.paddingHorizontal']}`,
			position: `relative`,
			transition: `background-color 0.1s ease-in-out`,
			...(isResizing ? {borderRight: `1px solid ${themeData['table.resize.pressed.borderColor']}`} : {}),
			...(isLast ? {borderBottom: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`} : {}),
			...(cellColumnIndex === -1 ? {display: 'flex', justifyContent: 'center', alignItems: 'center'} : {}),
			...(hasHover && cellColumnIndex !== -1 ? {backgroundColor: themeData['table.row.unselected.hover.backgroundColor']} : {}),
			...(isPressed && cellColumnIndex !== -1 ? {backgroundColor: themeData['table.cell.unselected.pressed.backgroundColor']} : {}),
			...(selected
				? {
					backgroundColor: `transparent`,
					borderRight: `1px solid ${themeData['table.row.selected.default.borderColor']}`,
					borderTop: `1px solid ${themeData['table.row.selected.default.borderColor']}`
					}
				: {}),
			...(selected && isLast ? {borderBottom: `1px solid ${themeData['table.row.selected.default.borderColor']}`} : {}),
			...(selectedBottom ? {borderTop: `1px solid ${themeData['table.row.selected.default.borderColor']}`} : {}),
			...(selectedLeft ? {borderRight: `1px solid ${themeData['table.row.selected.default.borderColor']}`} : {}),
			...(multiSelectedColumn
				? {
					backgroundColor: themeData['table.cell.multiSelect.default.backgroundColor'],
					borderRight: `1px solid ${themeData['table.cell.multiSelect.focus.borderColor']}`
				}
				: {}),
			...(multiSelectedColumn && isLast ? {borderBottom: `1px solid ${themeData['table.cell.multiSelect.focus.borderColor']}`} : {}),
			...(multiSelectedColumnLeft ? {borderRight: `1px solid ${themeData['table.cell.multiSelect.focus.borderColor']}`} : {}),
			...(multiSelectedRow
				? {
					backgroundColor: themeData['table.cell.multiSelect.default.backgroundColor'],
					borderTopColor: `${themeData['table.cell.multiSelect.focus.borderColor']}`
					}
				: {}),
			...(multiSelectedRowBottom
				? {
					borderTopColor: `${themeData['table.cell.multiSelect.focus.borderColor']}`
					}
				: {}),
			...(multiSelectedRow && multiSelectedRowBottom
				? {
					borderTopColor: `none`
					}
				: {}),
			...(multiSelectedRow && isLast
				? {
					borderBottomColor: `${themeData['table.cell.multiSelect.focus.borderColor']}`
					}
				: {}),
			"&:first-of-type": {
				borderLeft: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
				...(selected 
					? {
						borderLeft: `${themeData['table.borderWidth']} solid ${themeData['table.row.selected.default.borderColor']}`,
					}
					: {}),
				...(multiSelectedColumn
					? {
						borderLeft: `1px solid ${themeData['table.cell.multiSelect.focus.borderColor']}`
					}
					: {})
			},
			"&:last-of-type": {
				borderLeft: `none`,
				...(multiSelectedColumn ? {borderRight: `${themeData['table.borderWidth']} solid ${themeData['table.cell.multiSelect.focus.borderColor']}`} : {}),
			}
		},
		higTableCellContentWrapper: {
			display: `flex`,
			...(cellColumnIndex >= 0 ?
				{
					display: `block`,
					overflow: `hidden`,
					textOverflow: `ellipsis`,
					whiteSpace: `nowrap`
				} :
				{}
			)
		},
		higTableCustomExpander: {
			display: `block`,
			borderLeft: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
			borderRight: `${themeData['table.borderWidth']} solid ${themeData['colorScheme.divider.lightweight']}`,
			...(!isCustomeContentExpanded ? {display: `none`} : {})
		},
		headerHolder: {
			display: `flex`,
		},
		groupHeaderElement: {
			padding: `3px 3px 0 0`,
		}
	}
}
