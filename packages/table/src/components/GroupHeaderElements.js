import React from "react";
import { CaretRight16, CaretDown16 } from "@hig/icons";
import { css } from "emotion";

const GroupHeaderElements = ({ isGrouped, groupHeaderElementStyles }) => (
  <GroupHeader className={css(groupHeaderElementStyles)}>
    {isGrouped ? <CaretDown16 /> : <CaretRight16 />}
  </GroupHeader>
);

export default GroupHeaderElements;
