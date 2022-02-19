import React from 'react';
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

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
    const handleCellClick = () => {
        // don't select when multi-select row cell clicked
        // only select when checkbox is clicked
        if (cellColumnIndex === -1) {
            return;
        }
        setActiveColumnIndex(cellColumnIndex);
        setActiveRowIndex(cellRowIndex);
        setActiveMultiSelectColumn(null);
    };

	return (
        <ThemeContext.Consumer>
            {({ resolvedRoles, metadata }) => {
                const styles = stylesheet(props, resolvedRoles);
                return (
            		<div
                        {...otherProps}
                        css={styles.higTableCell}
                        data-cell-coords={`${cellColumnIndex}_${cellRowIndex}`}
                        onClick={handleCellClick}
                        className="td"
                    >
                        <div css={styles.higTableCellContentWrapper}>
                            {children}
                        </div>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
	)
}
