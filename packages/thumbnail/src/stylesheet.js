import { fits, ratios, sizes } from "./constants";

export default function stylesheet(props, themeData, themeMeta) {
  const { aspectRatio, fit, size, stylesheet: customStylsheet } = props;

  const styles = {
    thumbnail: {
      wrapper: {
        alignItems: "center",
        aspectRatio: ratios[aspectRatio],
        backgroundColor: themeData["thumbnail.backgroundColor"],
        borderRadius: themeData["thumbnail.borderRadius"],
        boxSizing: "border-box",
        display: "inline-flex",
        height: themeData[`thumbnail.${sizes[size]}.height`],
        overflow: "hidden",
        placeContent: "center",
        position: "relative",
      },
      border: {
        boxShadow: `inset 0 0 0 1px ${themeData["thumbnail.borderColor"]}`,
        boxSizing: "border-box",
        height: "100%",
        position: "absolute",
        width: "100%",
      },
      image: {
        display: "block",
        height: "100%",
        objectFit: fits[fit],
        width: "100%",
      },
    },
  };

  return customStylsheet
    ? customStylsheet(styles, props, themeData, themeMeta)
    : styles;
}
