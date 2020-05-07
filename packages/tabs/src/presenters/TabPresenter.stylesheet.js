import { variants, orientations } from "../constants";

function getHaloStyles(
  { active, hasHover, hasFocus, isPressed, variant, orientation, disabled },
  themeData
) {
  let styles = {
    position: "absolute",
    left: 0,
    height: 0,
    width: 0,
    transitionDuration: "0.3s",
    transitionProperty: "height, width"
  };

  if (variant === variants.UNDERLINE) {
    styles = {
      ...styles,
      bottom: 0,
      width: "100%",
      backgroundColor: themeData["tabs.underline.hover.haloColor"],
      overflow: "visible",
      "&:after": {
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: themeData["tabs.focus.haloColor"],
        content: `" "`,
        width: "100%",
        height: !disabled && hasFocus ? themeData["tabs.focus.haloWidth"] : 0,
        transitionDuration: "0.3s",
        transitionProperty: "height"
      }
    };

    if (!disabled && (hasHover || active || isPressed)) {
      styles = {
        ...styles,
        height: themeData["tabs.focus.haloWidth"],
        ...((active || isPressed) && {
          backgroundColor: themeData["tabs.underline.active.haloColor"]
        })
      };
    }
  } else if (variant === variants.BOX) {
    styles = {
      ...styles,
      top: 0,
      backgroundColor: themeData["tabs.focus.haloColor"]
    };

    if (orientation === orientations.VERTICAL) {
      styles.height = "100%";
      if (!disabled && hasFocus) {
        styles.width = themeData["tabs.focus.haloWidth"];
      }
    } else {
      styles.width = "100%";
      if (!disabled && hasFocus) {
        styles.height = themeData["tabs.focus.haloWidth"];
      }
    }
  }

  return styles;
}

function getTabBackground(
  { active, hasHover, isPressed, variant, disabled },
  themeData
) {
  if (!disabled && variant !== variants.UNDERLINE) {
    if (active || isPressed) {
      return themeData[`tabs.${variant}.tab.active.backgroundColor`];
    }
    if (hasHover) {
      return themeData[`tabs.${variant}.tab.hover.backgroundColor`];
    }
  }
  return "transparent";
}

function getContentWrapperWidth({ label, icon, closable }, themeData) {
  if (label) return "auto";
  if (icon && closable) {
    return `calc(${themeData["tabs.iconSize"]} + ${
      themeData["tabs.icon.gutter"]
    } + ${themeData["tabs.closeButton.minSize"]})`;
  }
  if (icon) return themeData["tabs.iconSize"];

  return "0";
}

export default function stylesheet(props, themeData) {
  const {
    active,
    label,
    icon,
    variant,
    orientation,
    disabled,
    closable
  } = props;

  return {
    tab: {
      position: "relative",
      display: "flex",
      margin: "0",

      ...(variant === variants.UNDERLINE && {
        marginRight: themeData["tabs.underline.tab.gutter"],
        "&:last-of-type": {
          marginRight: "0"
        }
      })
    },
    buttonWrapper: {
      position: "relative",
      display: "flex",
      width: orientation === orientations.VERTICAL ? "100%" : "auto",
      userSelect: "none",
      cursor: disabled ? "default" : "pointer",
      border: "0",
      transitionDuration: "0.3s",
      transitionProperty: "background-color",
      backgroundColor: getTabBackground(props, themeData),

      "&:focus": {
        outline: "none"
      },

      ...(variant === variants.UNDERLINE && {
        marginBottom: `-${
          themeData["tabs.underline.wrapper.borderBottomWidth"]
        }`,
        padding: `0 0 ${themeData["tabs.underline.tab.paddingBottom"]} 0`
      }),

      ...(variant === variants.BOX && {
        padding: `${themeData["tabs.box.tab.paddingVertical"]} ${
          themeData["tabs.box.tab.paddingHorizontal"]
        }`
      }),

      ...(variant === variants.CANVAS && {
        padding: `${themeData["tabs.canvas.tab.paddingVertical"]} ${
          themeData["tabs.canvas.tab.paddingHorizontal"]
        }`,
        transform: "skewX(-23deg)",
        transformOrigin: "0 100%"
      })
    },
    contentWrapper: {
      position: "relative",
      flexGrow: "1",
      transform: variant === variants.CANVAS ? "skewX(23deg)" : "none",
      opacity: disabled ? themeData["colorScheme.opacity.disabled"] : "1",
      width: getContentWrapperWidth(props, themeData),
      display: orientation === orientations.VERTICAL ? "block" : "flex"
    },
    label: {
      display: "inline-block",
      position: "relative",
      background: "transparent",
      fontFamily: themeData["tabs.label.fontFamily"],
      fontSize: themeData["tabs.label.fontSize"],
      fontWeight: active
        ? themeData["tabs.label.active.fontWeight"]
        : themeData["tabs.label.inactive.fontWeight"],
      lineHeight: themeData["tabs.label.active.lineHeight"],
      textAlign: "center",
      paddingLeft:
        icon && variant !== variants.UNDERLINE
          ? `calc(${themeData["tabs.iconSize"]} + ${
              themeData["tabs.icon.gutter"]
            })`
          : "0",

      paddingRight:
        closable && variant !== variants.UNDERLINE
          ? `calc(${themeData["tabs.closeButton.minSize"]} + ${
              themeData["tabs.closeButton.gutter"]
            })`
          : "0",

      color: themeData["tabs.label.fontColor"],

      // keep same amount of space whether it's active (bold font weight)
      // or not active (regular font weight)
      "&:before": {
        display: "block",
        content: `"${label}"`,
        fontFamily: themeData["tabs.label.fontFamily"],
        fontSize: themeData["tabs.label.fontSize"],
        fontWeight: themeData["tabs.label.active.fontWeight"],
        height: "0",
        color: "transparent",
        overflow: "hidden",
        visibility: "hidden"
      }
    },
    halo: getHaloStyles(props, themeData),
    divider: {
      ...(variant !== variants.UNDERLINE && {
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        height: themeData[`tabs.${variant}.dividerHeight`],
        width: themeData[`tabs.${variant}.dividerWidth`],
        backgroundColor: themeData[`tabs.${variant}.divider.borderColor`]
      })
    },
    icon: {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
      height: themeData["tabs.iconSize"],
      width: themeData["tabs.iconSize"],
      overflow: "hidden"
    },
    closeButton: {
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translateY(-50%)"
    }
  };
}
