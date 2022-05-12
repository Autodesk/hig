import { sizes } from "./availableSizes";

export default function stylesheet(props, themeData) {
  const { size, spacing, stylesheet: customStylsheet } = props;
  const styles = {
    spacer: {
      width: size || themeData[`density.spacings.${sizes[spacing]}`],
      height: size || themeData[`density.spacings.${sizes[spacing]}`],
      flex: size
        ? `0 0 ${size}`
        : `0 0 ${themeData[`density.spacings.${sizes[spacing]}`]}`,
    },
  };

  return customStylsheet ? customStylsheet(styles, props, themeData) : styles;
}
