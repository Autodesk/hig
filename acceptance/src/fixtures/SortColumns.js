import React from 'react';
import { css, cx } from "emotion";
// import {CaretUp16, CaretDown16} from '@hig/icons';
import {CaretUp16, CaretDown16} from '@hig/icons';


const styles = {
    position: "relative",
    top: "3px",
    left: "20px",
    opacity: 0,
    "&:hover": {
        opacity: 0.5
    }
};

const SortColumns = (props) => {
    const renderSortIcon = (e) => {
        return props.passedData.isSortedDesc ? <CaretDown16 /> :  <CaretUp16 />
    }

    return (
        <span className={cx([props.passedData.className, css(styles)])}>{renderSortIcon()}</span>
    )
}

export default SortColumns;
