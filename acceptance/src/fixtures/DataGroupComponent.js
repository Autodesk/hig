import React from 'react';
import { css } from "emotion";

import Accordion from '@hig/accordion';

const DataGroupComponent = ({passedData}) => {
  const {styles, groupNames, data, dataGroup} = passedData;
  return (
    <Accordion
      label={
        <div className={css(styles.higGroupedLabel)}>
          <div>{groupNames ? groupNames[passedData.count] : ""}</div>
          <div className={css(styles.higGroupedDataCount)}>
            {`(${data.length})`}
          </div>
        </div>
      }
    >
    {dataGroup}
    </Accordion>
  )
}

export default DataGroupComponent;
