function getRulesByStatus(themeData, status) {
  switch (status) {
    case "error":
      return { borderLeftColor: themeData["basics.colors.error"] };
    case "warning":
      return { borderLeftColor: themeData["basics.colors.warning"] };
    case "success":
      return { borderLeftColor: themeData["basics.colors.success"] };
    default:
      return { borderLeftColor: themeData["basics.colors.autodeskBlue500"] };
  }
}

export default function stylesheet(themeData, status) {
  return {
    toast: {
      boxSizing: `border-box`,
      display: `flex`,
      flexRlow: `row`,
      width: `340px`,
      minHeight: `53px`,
      padding: `16px 0`,
      boxShadow: `0 0 ${
        themeData["basics.shadows.lowBlur"]
      } 0 rgba(0, 0, 0, 0.25)`,
      borderRadius: themeData["basics.borderRadii.large"],
      borderLeft: `3px solid transparent`,
      backgroundColor: themeData["colorScheme.surfaceLevel100Color"],
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
      paddingRight: `36px`
    },
    toastDismiss: {
      position: `absolute`,
      /* Aligns first line of message to match the IconButton height */
      top: `-9px`,
      right: 0,
      // eslint-disable-next-line prettier/prettier
      "svg": {
        height: `30px`,
        width: `30px`
      }
    }
  };
}
