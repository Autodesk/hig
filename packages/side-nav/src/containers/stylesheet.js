import { constants, reset } from "../constants";

export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    belowTop: reset({
      position: "absolute",
      top: "56px",
      bottom: "0",
      height: "calc(100vh - 56px)",
      width: constants.sideNavMaxWidth,
      zIndex: "2",
      overflowX: "hidden",
    }),

    belowTopCompact: reset({
      position: "absolute",
      top: "56px",
      bottom: "0",
      height: "calc(100vh - 56px)",
      maxWidth: constants.sideNavMaxWidth,
      zIndex: "2",
      overflowX: "hidden",
    }),

    docked: reset({
      transition: `left 150ms cubic-bezier(0.000, 0.775, 0.775, 0.680)`,
      boxShadow: `inset -5px 0px 8px -5px ${themeData["colorScheme.shadow.low"]}`,
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      height: "100vh",
      width: constants.sideNavMaxWidth,
      paddingRight: "4px",
      zIndex: "2",
      overflowX: "hidden",
    }),
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData);
  }

  return styles;
}
