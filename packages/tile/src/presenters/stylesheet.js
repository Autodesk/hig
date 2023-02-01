export default function stylesheet(props, themeData, themeMeta) {
  const {
    background,
    contentWidth,
    disabled,
    divider,
    orientation,
    hasFocus,
    hasHover,
    isPressed,
    selected,
    stylesheet: customStylesheet,
    surface,
  } = props;
  const surfaceLevel = Number(surface) < 300 ? "100To250" : "300To350";
  const isColumn = orientation === "vertical";
  const isHorizontal = orientation === "horizontal";
  const getStylesByStatus = (status) => {
    const isFocus = status === "focus";
    if (selected) {
      return {
        background: themeData[`tile.selected.${status}.backgroundColor`],
        outlineColor: themeData["tile.selected.default.borderColor"],
        boxShadow: isFocus
          ? `0 0 0 ${themeData["tile.haloWidth"]} ${themeData["tile.focus.haloColor"]}`
          : "none",
      };
    }
    return {
      backgroundColor:
        themeData[
          `tile.${background}.${status}.level${surfaceLevel}.backgroundColor`
        ],
      boxShadow: isFocus
        ? `0 0 0 ${themeData["tile.haloWidth"]} ${themeData["tile.focus.haloColor"]}`
        : "none",
    };
  };
  const getStylesBySelected = () => {
    if (selected) {
      return {
        backgroundColor: themeData["tile.selected.default.backgroundColor"],
        outlineColor: themeData["tile.selected.default.borderColor"],
      };
    }
    return {};
  };
  const getStylesByDisabled = () => ({
    opacity: themeData["colorScheme.opacity.disabled"],
    pointerEvents: "none",
  });
  const getDivider = () => {
    const dividerStyle = `${themeData["divider.borderWidth"]} solid ${themeData["divider.lightColor"]}`;
    if (isHorizontal) {
      return {
        borderRight: dividerStyle,
      };
    }
    return {
      borderBottom: dividerStyle,
    };
  };
  const getTileContentPadding = () => {
    const verticalPadding =
      background === "empty"
        ? `0 ${themeData["tile.padding"]} ${themeData["tile.padding"]}`
        : themeData["tile.padding"];

    return isHorizontal
      ? `${themeData["tile.padding"]} ${themeData["tile.padding"]} ${themeData["tile.padding"]} ${themeData["tile.thumbnail.marginRight"]}`
      : verticalPadding;
  };
  const getTileHeaderFlatPadding = () =>
    isHorizontal
      ? `${themeData["tile.padding"]} ${themeData["tile.thumbnail.marginRight"]} ${themeData["tile.padding"]} ${themeData["tile.padding"]}`
      : themeData["tile.padding"];

  const styles = {
    higTileContainer: {
      backgroundColor:
        themeData[
          `tile.${background}.default.level${surfaceLevel}.backgroundColor`
        ],
      position: "relative",
      boxSizing: "border-box",
      display: "inline-flex",
      flexDirection: isColumn ? "column" : "row",
      outline: `${themeData["tile.borderWidth"]} solid transparent`,
      cursor: "pointer",
      color: themeData["tile.fontColor"],
      fontFamily: themeData["tile.fontFamily"],
      transitionProperty: "background-color, box-shadow, opacity, outline",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "0.3s",
      ...getStylesBySelected(),
      ...(hasFocus ? getStylesByStatus("focus") : {}),
      ...(hasHover ? getStylesByStatus("hover") : {}),
      ...(isPressed ? getStylesByStatus("pressed") : {}),
      ...(disabled ? getStylesByDisabled() : {}),
    },
    higMediaContainer: {
      boxSizing: "border-box",
      flex: "0 0 auto",
      display: "flex",
      position: "relative",
      margin: "0",
      padding: background === "filled" ? "0" : getTileHeaderFlatPadding(),
      overflow: "hidden",
      ...(divider && background === "filled" ? getDivider() : {}),
    },
    higTileContentContainer: {
      boxSizing: "border-box",
      position: "relative",
      padding: getTileContentPadding(),
      ...(contentWidth ? { width: contentWidth } : {}),
    },
    higTileTitleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: themeData["density.spacings.extraSmall"],
      marginBottom: themeData["tile.title.marginBottom"],
    },
    higTileTitle: {
      fontSize: themeData["tile.title.fontSize"],
      fontWeight: themeData["tile.title.fontWeight"],
      lineHeight: themeData["tile.title.lineHeight"],
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    higTileSubTitle: {
      fontSize: themeData["tile.subTitle.fontSize"],
      fontWeight: themeData["tile.subTitle.fontWeight"],
      lineHeight: themeData["tile.subTitle.lineHeight"],
      // this should be conditional in the complex version, as bottom padding should be w/ last element
      marginBottom: themeData["density.spacings.extraSmall"],
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    higTileStatusContainer: {
      display: "inline-flex",
      position: "absolute",
      right: `-${themeData["tile.haloWidth"]}`,
      top: `-${themeData["tile.haloWidth"]}`,
      zIndex: 2,
    },
  };

  return customStylesheet
    ? customStylesheet(styles, props, themeData, themeMeta)
    : styles;
}
