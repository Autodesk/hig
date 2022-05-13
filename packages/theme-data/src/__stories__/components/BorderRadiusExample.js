import React from "react";
import PropTypes from "prop-types";
import Swatch from "./Swatch";
import Value from "./Value";

function BorderRadiusExample({ value }) {
  return (
    <div>
      <Swatch borderRadius={value} />
      <Value>{value}</Value>
    </div>
  );
}

BorderRadiusExample.propTypes = {
  value: PropTypes.string,
};

export default BorderRadiusExample;
