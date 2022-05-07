import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";

export default function GeneralExample({ value }) {
  return <Value>{value}</Value>;
}

GeneralExample.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
