import React from "react";
import PropTypes from "prop-types";
import Swatch from "./Swatch";
import Value from "./Value";

export default function ShadowExample({ value }) {
  return (
    <div>
      <Swatch boxShadow={value} />
      <Value>{value}</Value>
    </div>
  );
}

ShadowExample.propTypes = {
  value: PropTypes.string
};
