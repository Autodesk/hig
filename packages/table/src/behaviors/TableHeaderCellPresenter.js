import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "../presenters/stylesheet";

export default function TableHeaderCellPresenter(props) {
  const {
    children,
    columnSelection,
    headerIndex,
    isSelectableHeader,
    isSortPassed,
    onClick,
    setActiveMultiSelectColumn
  } = props;
  const handleClick = useCallback(
    event => {
      if (isSortPassed && onClick && !columnSelection) {
        onClick(event);
      }
      // no column selection for multirow selection checkboxes
      if (headerIndex === -1 || !columnSelection) {
        return;
      }
      setActiveMultiSelectColumn(headerIndex);
    },
    [
      columnSelection,
      headerIndex,
      isSortPassed,
      onClick,
      setActiveMultiSelectColumn
    ]
  );

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles, metadata);

        return (
          /* eslint-disable-next-line */
          <div
            {...props}
            className={css(styles.higTableHeader)}
            onClick={handleClick}
            {...(isSelectableHeader
              ? { "data-cell-coords": `${headerIndex}_-1` }
              : {})}
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

TableHeaderCellPresenter.propTypes = {
  children: PropTypes.func,
  columnSelection: PropTypes.bool,
  headerIndex: PropTypes.number,
  isSelectableHeader: PropTypes.bool,
  isSortPassed: PropTypes.bool,
  onClick: PropTypes.func,
  setActiveMultiSelectColumn: PropTypes.bool
};
