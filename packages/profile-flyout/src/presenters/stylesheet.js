export default function stylesheet(themeData) {
  return {
    flyoutButton: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: `column`,
      width: `32px`,
      height: `32px`,
      padding: 0,
      margin: 0,
      border: 0,
      outline: 0,
      background: `none`,
      cursor: `pointer`
    },
    profileContent: {
      fontFamily: `ArtifaktElement`,
      lineHeight: 1.6,
      boxSizing: `border-box`,
      padding: themeData ? themeData["density.spacings.small"] : 0
    },
    profileName: {
      display: `block`,
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      fontSize: `16px`,
      fontWeight: `bold`,
      lineHeight: `24px`,
      ...(themeData ? { color: themeData["colorScheme.text.default"] } : {})
    },
    profileEmail: {
      display: `block`,
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      fontSize: `12px`,
      lineHeight: `16px`,
      ...(themeData ? { color: themeData["colorScheme.text.dim"] } : {})
    }
  };
}
