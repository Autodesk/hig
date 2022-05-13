import React from "react";
import PropTypes from "prop-types";
import Swatch from "./Swatch";
import Value from "./Value";

function BorderWidthExample({ value }) {
  return (
    <div>
      <Swatch borderWidth={value} />
      <Value>{value}</Value>
    </div>
  );
}

BorderWidthExample.propTypes = {
  value: PropTypes.string,
};

export default BorderWidthExample;
