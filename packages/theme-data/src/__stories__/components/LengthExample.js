import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";

export default function LengthExample({ value }) {
  return <Value>{value}</Value>;
}

LengthExample.propTypes = {
  value: PropTypes.string
};
