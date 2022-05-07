import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";
import FontSample from "./FontSample";

export default function FontWeightExample({ value }) {
  return (
    <div>
      <FontSample fontWeight={value} />
      <Value>{value}</Value>
    </div>
  );
}

FontWeightExample.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
