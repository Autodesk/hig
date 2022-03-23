import React from "react";
import PropTypes from "prop-types";

import { CaretRight16, CaretDown16 } from "@hig/icons";
import { css } from "emotion";

const GroupHeaderElements = ({ isGrouped, groupHeaderElementStyles }) => (
  <div className={css(groupHeaderElementStyles)}>
    {isGrouped ? <CaretDown16 /> : <CaretRight16 />}
  </div>
);

GroupHeaderElements.propTypes = {
  isGrouped: PropTypes.bool,
  groupHeaderElementStyles: PropTypes.shape({
    styles: PropTypes.string
  })
};

export default GroupHeaderElements;
