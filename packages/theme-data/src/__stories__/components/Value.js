import React from "react";
import PropTypes from "prop-types";
import InlineCode from "./InlineCode";

export default function Value({ children }) {
  return (
    <div>
      <InlineCode>{children}</InlineCode>
    </div>
  );
}

Value.propTypes = {
  children: PropTypes.node
};
