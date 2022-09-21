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
        boxShadow: `inset 0 0 1px ${themeData["thumbnail.borderColor"]}`,
        boxSizing: "border-box",
        display: "flex",
        height: themeData[`thumbnail.${sizes[size]}.height`],
        placeContent: "center",
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
