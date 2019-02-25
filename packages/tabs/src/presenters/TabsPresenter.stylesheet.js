import { alignments } from "../alignments";

export default function stylesheet({ align }, themeData) {
  const justifyContent = {
    [alignments.LEFT]: "flex-start",
    [alignments.CENTER]: "center",
    [alignments.RIGHT]: "flex-end"
  };

  return {
    tabs: {
      boxSizing: "border-box",
      flexGrow: 1,
      display: "flex",
      padding: `${themeData["density.spacings.extraExtraSmall"]} 0 ${
        themeData["density.spacings.extraSmall"]
      } 0`,
      margin: 0,
      justifyContent: justifyContent[align]
    }
  };
}
