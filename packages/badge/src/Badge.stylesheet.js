import { COLORS, SIZES, VARIANTS } from "./constants";

function getStylesByVariantAndSize(themeData, variant, size) {
  if (variant === VARIANTS.dot) {
    return {
      height:
        size === SIZES.s
          ? themeData["badge.dot.small.minHeight"]
          : themeData["badge.dot.large.minHeight"],
      width:
        size === SIZES.s
          ? themeData["badge.dot.small.minHeight"]
          : themeData["badge.dot.large.minHeight"],
    };
  }
  if (variant === VARIANTS.icon) {
    return {
      height:
        size === SIZES.s
          ? themeData["badge.icon.small.minHeight"]
          : themeData["badge.icon.large.minHeight"],
      width:
        size === SIZES.s
          ? themeData["badge.icon.small.minHeight"]
          : themeData["badge.icon.large.minHeight"],
    };
  }
  return {
    height: themeData["badge.text.minHeight"],
    padding: `0 ${themeData["badge.text.padding.horizontal"]}`,
    width: "auto",
  };
}

export default function stylesheet(props, themeData, themeMeta) {
  const {
    color,
    customColors,
    size,
    stylesheet: customStylesheet,
    variant,
  } = props;
  const styles = {
    badge: {
      alignItems: "center",
      backgroundColor:
        color === COLORS.custom
          ? customColors?.backgroundColor
          : themeData[`badge.${color}.backgroundColor`],
      borderRadius: themeData[`badge.${variant}.cornerRadius`],
      boxSizing: "border-box",
      color:
        color === COLORS.custom
          ? customColors?.fontColor
          : themeData[`badge.${color}.fontColor`],
      display: "inline-flex",
      fontFamily: themeData["badge.text.fontFamily"],
      fontSize: themeData["badge.text.fontSize"],
      fontWeight: themeData["badge.text.fontWeight"],
      justifyContent: "center",
      textTransform: "uppercase",
      "& > svg": {
        fill:
          color === COLORS.custom
            ? customColors?.iconColor
            : themeData[`badge.${color}.iconColor`],
        "& > *": {
          fill:
            color === COLORS.custom
              ? customColors?.iconColor
              : themeData[`badge.${color}.iconColor`],
        },
      },
      ...getStylesByVariantAndSize(themeData, variant, size),
    },
  };

  return customStylesheet
    ? customStylesheet(styles, props, themeData, themeMeta)
    : styles;
}
