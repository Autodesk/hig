import { sizes } from "./sizes";

const SizeMapping = {
  [sizes.SMALL_16]: "extraSmall",
  [sizes.MEDIUM_24]: "small",
  [sizes.MEDIUM_32]: "medium",
  [sizes.LARGE_48]: "large",
  [sizes.XLARGE_64]: "extraLarge"
};

export function getBGColor(backgroundId, themeData) {
  return themeData[`avatar.backgroundColor${backgroundId || 1}`];
}

export default function stylesheet(props, themeData) {
  const { backgroundId, size, stylesheet: customStylesheet } = props;
  const sizeString = size ? SizeMapping[size] : SizeMapping[sizes.MEDIUM_32];
  const diameter = themeData[`avatar.${sizeString}.diameter`];
  const fontSize = themeData[`avatar.${sizeString}.fontSize`];
  const fontFamily = themeData["basics.fontFamilies.main"];
  const bgColor = getBGColor(backgroundId, themeData);
  const fgColor = themeData["avatar.fontColor"];

  const styles = {
    avatarContainer: {
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
    avatarImageWrapper: {
      position: "absolute",
      display: "flex",
      zIndex: "2",
      fontSize
    },
    avatarImage: {
      borderRadius: "50%",
      width: diameter,
      height: diameter
    },
    avatarInitials: {
      width: diameter,
      height: diameter,
      fontFamily
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
