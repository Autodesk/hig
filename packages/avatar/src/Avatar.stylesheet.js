import { sizes } from "./sizes";

const SizeMapping = {
  [sizes.SMALL_16]: "extraSmall",
  [sizes.MEDIUM_24]: "small",
  [sizes.MEDIUM_32]: "medium",
  [sizes.LARGE_48]: "large",
  [sizes.XLARGE_64]: "extraLarge"
};

export default function stylesheet(props, themeData) {
  const { size, backgroundId } = props;
  const sizeString = size ? SizeMapping[size] : SizeMapping[sizes.MEDIUM_32];
  const diameter = themeData[`avatar.${sizeString}.diameter`];
  const fontSize = themeData[`avatar.${sizeString}.fontSize`];
  const fontFamily = themeData["basics.fontFamilies.main"];
  const bgColor = themeData[`avatar.color${backgroundId || 1}.backgroundColor`];
  const fgColor = themeData[`avatar.color${backgroundId || 1}.fontColor`];

  return {
    avatar: {
      container: {
        backgroundColor: bgColor,
        color: fgColor,
        width: diameter,
        height: diameter,
        lineHeight: diameter,
        fontSize,
        display: "block",
        position: "relative",
        margin: 0,
        overflow: "hidden",
        borderRadius: "50%",
        textAlign: "center"
      },
      imageWrapper: {
        position: "absolute",
        display: "flex",
        zIndex: "2",
        fontSize
      },
      image: {
        borderRadius: "50%",
        width: diameter,
        height: diameter
      },
      initials: {
        width: diameter,
        height: diameter,
        fontFamily
      }
    }
  };
}
