import React from 'react';
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

export default function TableHeaderCellPresenter(props) {
    const {
        children,
        columnSelection,
        getColumnHeaderArray,
        headerIndex,
        isSelectableHeader,
        setActiveMultiSelectColumn
    } = props;
    const handleClick = (e) => {
        if (props.isSortPassed && props.onClick && !columnSelection) {
            props.onClick(e);
        }
        // no column selection for multirow selection checkboxes
        if (headerIndex === -1 || !columnSelection) {
            return;
        }
        setActiveMultiSelectColumn(headerIndex);
    }

	return (
        <ThemeContext.Consumer>
            {({ resolvedRoles, metadata }) => {
                const styles = stylesheet(props, resolvedRoles);

                return (
            	    <div
            	      {...props}
            	      css={styles.higTableHeader}
                      onClick={handleClick}
                      className="th"
                      {...(isSelectableHeader ? {'data-cell-coords': `${headerIndex}_-1`} : {})}
            	    >
                        <div css={styles.higTableHeaderContentWrapper}>
                            {children}
                        </div>
            	    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}
