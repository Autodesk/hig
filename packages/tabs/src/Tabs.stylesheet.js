import { orientations } from "./constants";

export default function stylesheet({ orientation }) {
  return {
    wrapper: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexDirection: orientation === orientations.HORIZONTAL ? "column" : "row"
    }
  };
}
