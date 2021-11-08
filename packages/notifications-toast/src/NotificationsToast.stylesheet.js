function getRulesByStatus(themeData, status) {
  switch (status) {
    case "error":
      return { borderLeftColor: themeData["colorScheme.status.error"] };
    case "warning":
      return { borderLeftColor: themeData["colorScheme.status.warning"] };
    case "success":
      return { borderLeftColor: themeData["colorScheme.status.success"] };
    default:
      return {
        borderLeftColor: themeData["basics.colors.primary.autodeskBlue.500"]
      };
  }
}

export default function stylesheet(props, themeData) {
  const { status, stylesheet: customStylesheet } = props;
  const styles = {
    toast: {
      boxSizing: `border-box`,
      display: `flex`,
      flexRlow: `row`,
      width: `340px`,
      minHeight: `53px`,
      padding: `16px 0`,
      boxShadow: `0 0 ${
        themeData["notifications.container.shadowBlur"]
      } 0 rgba(0, 0, 0, 0.25)`,
      borderRadius: `3px ${themeData["notifications.borderRadius"]} ${
        themeData["notifications.borderRadius"]
      } 3px`,
      borderLeft: `3px solid transparent`,
      backgroundColor: themeData["colorScheme.surface.level100"],
      ...(status ? getRulesByStatus(themeData, status) : {})
    },
    toastImageContainer: {
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `center`,
      minWidth: `70px`,
      padding: `0 10px 0 12px`
    },
    toastBody: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      flexGrow: 1,
      "&:first-of-type": {
        marginLeft: `16px`
      }
    },
    toastMessage: {
      flexGrow: 1,
      display: `flex`,
      position: `relative`,
      paddingRight: `36px`,
      overflowWrap: `break-word`,
      flexDirection: `row`,
      flex: 1,
      flexShrink: 1,
      flexWrap: `wrap`,
      wordWrap: `break-word`,
      overflow: `hidden`
    },
    toastDismiss: {
      position: `absolute`,
      /* Aligns first line of message to match the IconButton height */
      top: `-9px`,
      right: 0,
      // eslint-disable-next-line prettier/prettier
      "svg": {
        // eslint-disable-next-line prettier/prettier
        "path": {
          fill: themeData["colorScheme.icon.default"]
        }
      }
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
