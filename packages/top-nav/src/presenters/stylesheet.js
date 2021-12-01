function getTopNavThemeData(themeData) {
  return {
    background: themeData["colorScheme.surface.level100"],
    fontFamily: themeData["basics.fontFamilies.main"],
    boxShadow: `0 4px ${
      themeData["basics.shadows.lowBlur"]
    } -4px rgba(0, 0, 0, 0.25)`
  };
}

export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const styles = {
    topNav: {
      display: `flex`,
      position: `relative`,
      height: `56px`,
      minHeight: `56px`,
      paddingLeft: `7px`,
      justifyContent: `space-between`,
      alignItems: `stretch`,
      zIndex: 9998,
      lineHeight: 1.6,
      boxSizing: `border-box`,
      ...(themeData ? getTopNavThemeData(themeData) : {})
    },
    topNavSpacer: {
      flex: `1 1 0`
    },
    topNavLogoWrapper: {
      display: `flex`,
      padding: `0 12px 0 5px`,
      alignItems: `center`
    },
    topNavSeparator: {
      width: 0,
      height: `32px`,
      margin: `12px 6px`,
      borderLeftWidth: `1px`,
      borderLeftColor: themeData
        ? themeData["divider.heavyColor"]
        : `transparent`,
      borderLeftStyle: `solid`
    },
    topNavProfileAction: {
      display: `flex`,
      alignItems: `center`,
      boxSizing: `border-box`
    },
    topNavProfileActionButtonWrapper: {
      display: `flex`,
      alignItems: `center`,
      padding: `0 6px`
    },
    topNavLogo: {
      display: `flex`,
      textDecoration: `none`,
      cursor: `pointer`
    },
    topNavLogoTextPresenter: {
      display: `inline-block`,
      margin: 0,
      fontSize: `16px`,
      lineHeight: `16px`,
      fontWeight: 400
    },
    topNavInteractions: {
      display: `flex`,
      alignItems: `center`,
      padding: `0 6px`
    },
    topNavAction: {
      display: `flex`,
      height: `56px`,
      alignItems: `center`
    },
    topNavActionFlyoutPanel: {
      width: `276px`,
      maxHeight: `360px`,
      overflowY: `auto`,
      msOverflowStyle: `-ms-autohiding-scrollbar`
    }
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
