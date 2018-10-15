import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/themes";
import Text from "./Text";

export default function Header({ title }) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => (
        <div>
          <Text
            fontSize={Text.FONT_SIZES.XL}
            fontWeight={Text.FONT_WEIGHTS.MEDIUM}
            fontFamily={Text.FONT_FAMILIES.MAIN}
            lineHeight={Text.LINE_HEIGHTS.S}
            color={Text.DEFAULT_TEXT_COLOR}
          >
            {title}
          </Text>
          <div style={{ height: themeData["density.spacings.medium"] }} />
          <div
            style={{
              display: "flex",
              marginBottom: themeData["density.spacings.medium"]
            }}
          >
            <div style={{ flex: "1 1 0" }}>
              <Text
                fontSize={Text.FONT_SIZES.L}
                fontWeight={Text.FONT_WEIGHTS.MEDIUM}
                fontFamily={Text.FONT_FAMILIES.MAIN}
                lineHeight={Text.LINE_HEIGHTS.S}
                color={Text.DEFAULT_TEXT_COLOR}
              >
                Role
              </Text>
            </div>
            <div style={{ flex: "1 1 0" }}>
              <Text
                fontSize={Text.FONT_SIZES.L}
                fontWeight={Text.FONT_WEIGHTS.MEDIUM}
                fontFamily={Text.FONT_FAMILIES.MAIN}
                lineHeight={Text.LINE_HEIGHTS.S}
                color={Text.DEFAULT_TEXT_COLOR}
              >
                Value
              </Text>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
