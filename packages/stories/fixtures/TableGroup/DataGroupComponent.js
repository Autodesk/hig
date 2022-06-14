import React from 'react';
import { css } from "emotion";

import Accordion from '@hig/accordion';
import Checkbox from '@hig/checkbox';

const DataGroupComponent = ({passedData}) => {
  const {
    styles,
    groupNames,
    data,
    dataGroup,
    count,
    getOffset = () => {},
    checkboxToggle = [],
    setCheckboxToggle = () => {},
    setAllMultiSelectedRows = () => {},
    setActiveMultiSelectRowArray = () => {},
    getActiveMultiSelectRowArray = () => {},
  } = passedData;

  const handleSelectAllGroup = (e) => {
    e.stopPropagation();

    let newArray = data.map(
      (row, index) => index + getOffset()
    );

    const groupSpecificDataArray = [...newArray];

    if (getActiveMultiSelectRowArray) {
      newArray = getActiveMultiSelectRowArray.concat(newArray);
    }
    if (checkboxToggle[count] === false) {
      setAllMultiSelectedRows(true);
      setCheckboxToggle(count, true);
      setActiveMultiSelectRowArray(newArray);
    } else {
      setAllMultiSelectedRows(false);
      setCheckboxToggle(count, false);
      newArray = newArray.filter( (el) => !groupSpecificDataArray.includes( el ) );
      setActiveMultiSelectRowArray(newArray);
    }
  }
  return (
    <>
      <Accordion
        label={
          <div className={css(styles.higGroupedLabel)}>
            <div className={css(styles.higGroupToggleHolder)}>
              <Checkbox id={count} onClick={handleSelectAllGroup} checked={checkboxToggle[count]} className={css(styles.higGroupedCheckToggle)}/>
            </div>
            <div>{groupNames ? groupNames[count] : ""}</div>
            <div className={css(styles.higGroupedDataCount)}>
              {`(${data.length})`}
            </div>
          </div>
        }
        defaultCollapsed={false}
        stylesheet={(styles, props, themeData) => {
          return {
            ...styles,
            indicator: {
              ...styles.indicator,
              marginLeft: '30px'
            }
            
          }
        }}
      >
      {dataGroup}
      </Accordion>
    </>
  )
}

export default DataGroupComponent;
