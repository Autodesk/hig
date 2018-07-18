import React from "react";
import PropTypes from "prop-types";
import BASICS from "../../basics";

export default function InlineCode({ children }) {
  return (
    <code style={{ fontFamily: BASICS.FONT_FAMILIES.MONOSPACE }}>
      {children}
    </code>
  );
}

InlineCode.propTypes = {
  children: PropTypes.node
};
