import { groupSeparator } from "../constants";

export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    group: groupSeparator(props, themeData, {
      padding: `${themeData["density.spacings.extraSmall"]} 0`,
      position: "relative",

      "&:empty:after": {
        display: "none",
      },
    }),

    intro: {
      paddingLeft: themeData["density.spacings.medium"],
    },
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData);
  }

  return styles;
}
