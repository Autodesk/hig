import React from "react";
import PropTypes from "prop-types";
import Spacing from "./Spacing";
import Value from "./Value";

export default function SpacingExample({ value }) {
  return (
    <div>
      <Spacing length={value} />
      <Value>{value}</Value>
    </div>
  );
}

SpacingExample.propTypes = {
  value: PropTypes.string,
};
