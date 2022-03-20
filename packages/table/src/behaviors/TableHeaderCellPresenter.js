import React, {useCallback} from 'react';
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "../presenters/stylesheet";

export default function TableHeaderCellPresenter(props) {
  const {
    children,
    columnSelection,
    getColumnHeaderArray,
    headerIndex,
    isSelectableHeader,
    isSortPassed,
    onClick,
    setActiveMultiSelectColumn
  } = props;
  const handleClick = useCallback((event) => {
    if (isSortPassed && onClick && !columnSelection) {
        onClick(event);
    }
    // no column selection for multirow selection checkboxes
    if (headerIndex === -1 || !columnSelection) {
        return;
    }
    setActiveMultiSelectColumn(headerIndex);
  }, [columnSelection, headerIndex, isSortPassed, onClick, setActiveMultiSelectColumn]);

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles);

        return (
          <div
            {...props}
            className={css(styles.higTableHeader)}
            onClick={handleClick}
            {...(isSelectableHeader ? {'data-cell-coords': `${headerIndex}_-1`} : {})}
          >
            <div className={css(styles.higTableHeaderContentWrapper)}>
              {children}
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
