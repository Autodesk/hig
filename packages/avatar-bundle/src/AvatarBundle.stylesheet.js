import {
  SizeMapping,
  StyleItems,
  stylesheet as avatarStylesheet,
  sizes
} from "@hig/avatar";

import { spacings } from "./spacings";

export const SpacingMapping = {
  [spacings.DEFAULT]: "default",
  [spacings.CONDENSED]: "condensed",
  [spacings.SUPER_CONDENSED]: "superCondensed"
};

export default function stylesheet(props, themeData) {
  const { size, spacing, borderColor, stylesheet: customStylesheet } = props;
  const sizeString = size ? SizeMapping[size] : SizeMapping[sizes.MEDIUM_32];
  const spacingString = spacing
    ? SpacingMapping[spacing]
    : SpacingMapping[spacings.DEFAULT];

  let clipPath = "";
  let boxShadow = "";
  if (borderColor) {
    const borderWidth = themeData[`avatarBundle.${sizeString}.border`];
    boxShadow = `0 0 0 ${borderWidth} ${borderColor}`;
  } else {
    clipPath = `url(#avatar-bundle-clip-${sizeString}-${spacingString})`;
  }

  const avatarSpacingSecondItem =
    themeData[`avatarBundle.${sizeString}.${spacingString}.spacing.secondItem`];
  const avatarSpacingThirdItem =
    themeData[`avatarBundle.${sizeString}.${spacingString}.spacing.thirdItem`];
  const overflowBackground = themeData["avatarBundle.default.backgroundColor"];
  const overflowFontColor = themeData["avatarBundle.fontColor"];

  const avatarStyle = avatarStylesheet({ size }, themeData);
  const { height: diameter } = avatarStyle[StyleItems.avatarContainer];
  const { fontFamily } = avatarStyle[StyleItems.avatarInitials];

  const styles = {
    avatarBundleContainer: {
      display: "inline-grid"
    },
    avatarWrapper: {
      gridArea: "1 / 1 / 1",
      width: diameter,
      height: diameter,
      borderRadius: "50%",
      boxShadow
    },
    avatarWrapperFirstItem: {
      zIndex: "3"
    },
    avatarWrapperSecondItem: {
      marginLeft: avatarSpacingSecondItem,
      zIndex: "2",
      clipPath
    },
    avatarWrapperThirdItem: {
      marginLeft: avatarSpacingThirdItem,
      zIndex: "1",
      clipPath
    },
    avatarOverflowCount: {
      ...avatarStyle[StyleItems.avatarContainer],
      marginLeft: avatarSpacingThirdItem,
      zIndex: "1",
      clipPath,
      backgroundColor: overflowBackground,
      color: overflowFontColor,
      fontFamily
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
