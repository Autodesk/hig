import { constants } from "../constants";

export default function stylesheet() {
  return {
    boxSizing: "border-box",
    paddingLeft: "24px",
    paddingTop: "48px",
    width: constants.sideNavMaxWidth
  };
}
