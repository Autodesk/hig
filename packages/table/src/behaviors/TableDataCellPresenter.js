import React, { useCallback } from 'react';
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "../presenters/stylesheet";

export default function TableDataCellPresenter(props) {
  const {
    cellColumnIndex,
    cellRowIndex,
    children,
    multiSelectedColumn,
    selected,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveRowIndex,
    ...otherProps
  } = props;
  const handleCellClick = useCallback(() => {
    // don't select when multi-select row cell clicked
    // only select when checkbox is clicked
    if (cellColumnIndex === -1) {
        return;
    }
    setActiveColumnIndex(cellColumnIndex);
    setActiveRowIndex(cellRowIndex);
    setActiveMultiSelectColumn(null);
  }, [cellColumnIndex, cellRowIndex,setActiveColumnIndex, setActiveRowIndex, setActiveMultiSelectColumn]);

	return (
        <ThemeContext.Consumer>
            {({ resolvedRoles, metadata }) => {
                const styles = stylesheet(props, resolvedRoles);
                return (
            		<div
                        {...otherProps}
                        className={css(styles.higTableCell)}
                        data-cell-coords={`${cellColumnIndex}_${cellRowIndex}`}
                        onClick={handleCellClick}
                    >
                        <div className={css(styles.higTableCellContentWrapper)}>
                            {children}
                        </div>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
	)
}
