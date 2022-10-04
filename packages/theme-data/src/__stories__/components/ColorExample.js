import React from "react";
import PropTypes from "prop-types";
import Swatch from "./Swatch";
import Value from "./Value";

export default function ColorExample({ value }) {
  return (
    <div>
      <Swatch color={value} />
      <Value>{value}</Value>
    </div>
  );
}

ColorExample.propTypes = {
  value: PropTypes.string,
  basics: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    colors: PropTypes.any,
  }),
};
