function getRulesByStatus(themeData, status) {
  switch (status) {
    case "error":
      return { borderLeftColor: themeData["colorScheme.errorColor"] };
    case "warning":
      return { borderLeftColor: themeData["colorScheme.warningColor"] };
    case "success":
      return { borderLeftColor: themeData["colorScheme.successColor"] };
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
      borderRadius: `3px ${themeData["basics.borderRadii.large"]} ${
        themeData["basics.borderRadii.large"]
      } 3px`,
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
        // eslint-disable-next-line prettier/prettier
        "path": {
          fill: themeData["colorScheme.iconColor"]
        }
      }
    }
  };
}
