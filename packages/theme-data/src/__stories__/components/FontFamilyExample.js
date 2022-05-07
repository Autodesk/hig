import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";
import FontSample from "./FontSample";

export default function FontFamilyExample({ value }) {
  return (
    <div>
      <FontSample fontFamily={value} />
      <Value>{value}</Value>
    </div>
  );
}

FontFamilyExample.propTypes = {
  value: PropTypes.string,
};
