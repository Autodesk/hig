import React from "react";
import PropTypes from "prop-types";

import Text from "./Text";
import InlineCode from "./InlineCode";

export default function Reference({ children }) {
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

Reference.propTypes = {
  children: PropTypes.node
};
