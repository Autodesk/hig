import React from "react";
import PropTypes from "prop-types";
import InlineCode from "./InlineCode";
import Text from "./Text";

export default function Value({ children }) {
  return (
    <Text
      fontSize={Text.FONT_SIZES.M}
      fontFamily={Text.FONT_FAMILIES.MAIN}
      fontWeight={Text.FONT_WEIGHTS.REGULAR}
      lineHeight={Text.LINE_HEIGHTS.M}
      color={Text.DEFAULT_TEXT_COLOR}
    >
      <InlineCode>{children}</InlineCode>
    </Text>
  );
}

Value.propTypes = {
  children: PropTypes.node,
};
