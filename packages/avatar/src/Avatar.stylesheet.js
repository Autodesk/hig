import { sizes } from "./sizes";
import { SizeMapping, StyleItems } from "./constants";

export default function stylesheet(props, themeData) {
  const { backgroundId, size, stylesheet: customStylesheet } = props;
  const sizeString = size ? SizeMapping[size] : SizeMapping[sizes.MEDIUM_32];
  const diameter = themeData[`avatar.${sizeString}.diameter`];
  const fontSize = themeData[`avatar.${sizeString}.fontSize`];
  const fontFamily = themeData["basics.fontFamilies.main"];
  const bgColor = themeData[`avatar.backgroundColor${backgroundId || 1}`];
  const fgColor = themeData["avatar.fontColor"];

  const styles = {
    [StyleItems.avatarContainer]: {
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
    [StyleItems.avatarImageWrapper]: {
      position: "absolute",
      display: "flex",
      zIndex: "2",
      fontSize
    },
    [StyleItems.avatarImage]: {
      borderRadius: "50%",
      width: diameter,
      height: diameter
    },
    [StyleItems.avatarInitials]: {
      width: diameter,
      height: diameter,
      fontFamily
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
