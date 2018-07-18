import React from "react";
import PropTypes from "prop-types";

export default function Reference({ children }) {
  return (
    <div>
      Reference to: <code>{children}</code>
    </div>
  );
}

Reference.propTypes = {
  children: PropTypes.node
};
