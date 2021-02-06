import { SIZES } from "./constants";

export default function stylesheet(props, themeData) {
  function sizeKey(size) {
    return size ? SIZES[size] : "none";
  }

  function spacing(size) {
    return size === "none"
      ? "basics.spacings.none"
      : `density.spacings.${size}`;
  }

  const {
    borderRadius,
    horizontalPadding,
    verticalPadding,
    level,
    shadow,
    stylesheet: customStylesheet
  } = props;
  const styles = {
    surface: {
      backgroundColor: themeData[`colorScheme.surface.level${level}`],
      padding: `${themeData[spacing(sizeKey(verticalPadding))]} ${
        themeData[spacing(sizeKey(horizontalPadding))]
      }`,
      borderRadius: themeData[`basics.borderRadii.${sizeKey(borderRadius)}`],

      ...(shadow && {
        boxShadow: `0 0 ${themeData[`basics.shadows.${shadow}Blur`]} 0 ${
          themeData[`colorScheme.shadow.${shadow}`]
        }`
      })
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
