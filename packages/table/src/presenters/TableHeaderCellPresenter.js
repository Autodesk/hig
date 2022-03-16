import React from 'react';
import { css } from "emotion";
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
  const handleClick = (event) => {
    if (props.isSortPassed && props.onClick && !columnSelection) {
        props.onClick(event);
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
