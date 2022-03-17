export default function stylesheet(props, themeData) {
  const {
    height,
    marginBottom,
    maxWidth,
    stylesheet: customStylesheet
  } = props;
  const styles = {
    skeletonItem: {
      backgroundColor: themeData["skeletonItem.backgroundColor"],
      borderRadius: themeData["skeletonItem.borderRadius"],
      height: height || themeData["skeletonItem.minHeight"],
      overflow: "hidden",
      position: "relative",
      marginBottom,
      maxWidth,
      "&:after": {
        animation: "3s ease-in infinite shine",
        backgroundImage: `linear-gradient(135deg, transparent 0%, transparent 40%, ${themeData["skeletonItem.highlightColor"]} 50%, transparent 60%, transparent 100%)`,
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

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
