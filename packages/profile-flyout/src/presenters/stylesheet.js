function getProfileNameColor(themeData, theme) {
  return {
    color:
      theme === `hig-light` ? `#222934` : themeData["colorScheme.textColor"]
  };
}

function getProfileEmailColor(themeData, theme) {
  return {
    color:
      theme === `hig-light` ? `#666` : themeData["colorScheme.textColorDim"]
  };
}

export default function stylesheet(themeData, theme) {
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
      padding: `10px`
    },
    profileName: {
      display: `block`,
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      fontSize: `16px`,
      fontWeight: `bold`,
      lineHeight: `24px`,
      ...(theme ? getProfileNameColor(themeData, theme) : {})
    },
    profileEmail: {
      display: `block`,
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      fontSize: `12px`,
      lineHeight: `16px`,
      ...(theme ? getProfileEmailColor(themeData, theme) : {})
    }
  };
}
