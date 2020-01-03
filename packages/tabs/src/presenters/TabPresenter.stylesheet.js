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
      backgroundColor: themeData["tabs.underline.halo.hover.color"],
      overflow: "visible",
      "&:after": {
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: themeData["tabs.general.halo.color"],
        content: `" "`,
        width: "100%",
        height: !disabled && hasFocus ? themeData["tabs.general.halo.size"] : 0,
        transitionDuration: "0.3s",
        transitionProperty: "height"
      }
    };

    if (!disabled && (hasHover || active || isPressed)) {
      styles = {
        ...styles,
        height: themeData["tabs.general.halo.size"],
        ...((active || isPressed) && {
          backgroundColor: themeData["tabs.underline.halo.active.color"]
        })
      };
    }
  } else if (variant === variants.BOX) {
    styles = {
      ...styles,
      top: 0,
      backgroundColor: themeData["tabs.general.halo.color"]
    };

    if (orientation === orientations.VERTICAL) {
      styles.height = "100%";
      if (!disabled && hasFocus) {
        styles.width = themeData["tabs.general.halo.size"];
      }
    } else {
      styles.width = "100%";
      if (!disabled && hasFocus) {
        styles.height = themeData["tabs.general.halo.size"];
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
    return `calc(${themeData["tabs.general.icon.size"]} + ${themeData["tabs.general.icon.gutter"]} + ${themeData["tabs.general.closeButton.size"]})`;
  }
  if (icon) return themeData["tabs.general.icon.size"];

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
        marginBottom: `-${themeData["tabs.underline.wrapper.borderBottomWidth"]}`,
        padding: `0 0 ${themeData["tabs.underline.tab.paddingBottom"]} 0`
      }),

      ...(variant === variants.BOX && {
        padding: `${themeData["tabs.box.tab.verticalPadding"]} ${themeData["tabs.box.tab.horizontalPadding"]}`
      }),

      ...(variant === variants.CANVAS && {
        padding: `${themeData["tabs.canvas.tab.verticalPadding"]} ${themeData["tabs.canvas.tab.horizontalPadding"]}`,
        transform: "skewX(-23deg)",
        transformOrigin: "0 100%"
      })
    },
    contentWrapper: {
      position: "relative",
      flexGrow: "1",
      transform: variant === variants.CANVAS ? "skewX(23deg)" : "none",
      opacity: disabled ? themeData["component.disabled.opacity"] : "1",
      width: getContentWrapperWidth(props, themeData),
      display: orientation === orientations.VERTICAL ? "block" : "flex"
    },
    label: {
      display: "inline-block",
      position: "relative",
      background: "transparent",
      fontFamily: themeData["tabs.general.tab.fontFamily"],
      fontSize: themeData["tabs.general.tab.fontSize"],
      fontWeight: active
        ? themeData["tabs.general.tab.active.fontWeight"]
        : themeData["tabs.general.tab.fontWeight"],
      lineHeight: themeData["tabs.general.tab.lineHeight"],
      textAlign: "center",
      paddingLeft:
        icon && variant !== variants.UNDERLINE
          ? `calc(${themeData["tabs.general.icon.size"]} + ${themeData["tabs.general.icon.gutter"]})`
          : "0",

      paddingRight:
        closable && variant !== variants.UNDERLINE
          ? `calc(${themeData["tabs.general.closeButton.size"]} + ${themeData["tabs.general.closeButton.gutter"]})`
          : "0",

      color: themeData["tabs.general.tab.color"],

      // keep same amount of space whether it's active (bold font weight)
      // or not active (regular font weight)
      "&:before": {
        display: "block",
        content: `"${label}"`,
        fontFamily: themeData["tabs.general.tab.fontFamily"],
        fontSize: themeData["tabs.general.tab.fontSize"],
        fontWeight: themeData["tabs.general.tab.active.fontWeight"],
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
        height: themeData[`tabs.${variant}.divider.height`],
        width: themeData[`tabs.${variant}.divider.width`],
        backgroundColor: themeData[`tabs.${variant}.divider.color`]
      })
    },
    icon: {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
      height: themeData["tabs.general.icon.size"],
      width: themeData["tabs.general.icon.size"],
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
