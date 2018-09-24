export default function stylesheet(props, themeData) {
  const { height, marginBottom, maxWidth } = props;
  return {
    skeletonItem: {
      backgroundColor: themeData["SKELETON_ITEM.BACKGROUND_COLOR"],
      borderRadius: themeData["SKELETON_ITEM.BORDER_RADIUS"],
      height: height || themeData["SKELETON_ITEM.DEFAULT_HEIGHT"],
      overflow: "hidden",
      position: "relative",
      marginBottom,
      maxWidth,
      "&:after": {
        animation: "3s ease-in infinite shine",
        backgroundImage: `linear-gradient(135deg, transparent 0%, transparent 40%, ${
          themeData["SKELETON_ITEM.HIGHLIGHT_COLOR"]
        } 50%, transparent 60%, transparent 100%)`,
        bottom: 0,
        content: '""',
        left: 0,
        position: "absolute",
        top: 0,
        width: "300px"
      },
      "@keyframes shine": {
        from: {
          transform: "translateX(-100%)"
        },
        "60%": {
          transform: "translateX(100%)"
        },
        to: {
          transform: "translateX(100%)"
        }
      }
    }
  };
}
