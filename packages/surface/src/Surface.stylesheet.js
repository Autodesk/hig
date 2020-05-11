import { SIZES } from "./constants";

export default function stylesheet(props, themeData) {
  const {
    borderRadius,
    horizontalPadding,
    verticalPadding,
    level,
    shadow
  } = props;

  function sizeKey(size) {
    return size ? SIZES[size] : "none";
  }

  function spacing(size) {
    return size === "none"
      ? "basics.spacings.none"
      : `density.spacings.${size}`;
  }

  return {
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
}
