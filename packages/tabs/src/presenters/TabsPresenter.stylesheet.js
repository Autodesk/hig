import { alignments } from "../alignments";

export default function stylesheet({ align }) {
  const justifyContent = {
    [alignments.LEFT]: "flex-start",
    [alignments.CENTER]: "center",
    [alignments.RIGHT]: "flex-end"
  };

  return {
    tabs: {
      fontFamily: "ArtifaktElement",
      boxSizing: "border-box",
      flexGrow: 1,
      display: "flex",
      lineHeight: "16px",
      padding: "4px 0 8px 0",
      margin: 0,
      justifyContent: justifyContent[align]
    }
  };
}
