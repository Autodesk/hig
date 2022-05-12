import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";
import FontSample from "./FontSample";

export default function FontSizeExample({ value }) {
  return (
    <div>
      <FontSample fontSize={value} />
      <Value>{value}</Value>
    </div>
  );
}

FontSizeExample.propTypes = {
  value: PropTypes.string,
};
