import { constants } from "../constants";

export default function stylesheet(props) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    boxSizing: "border-box",
    paddingLeft: "24px",
    paddingTop: "48px",
    width: constants.sideNavMaxWidth
  };

  if (customStylesheet) {
    return customStylesheet(styles, props);
  }

  return styles;
}
