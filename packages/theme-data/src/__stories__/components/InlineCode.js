import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";

export default function InlineCode({ children }) {
  return (
    <Text
      fontFamily={Text.FONT_FAMILIES.MONOSPACE}
      layout={Text.LAYOUTS.INLINE}
    >
      {children}
    </Text>
  );
}

InlineCode.propTypes = {
  children: PropTypes.node,
};
