export default function stylesheet(props, themeData, metadata) {
  const {
    orientation,
    backgroundColor,
    divider
  } = props;
  const isColumn = orientation === 'vertical';
  return {
    higTileContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: isColumn ? 'column' : 'row',
      backgroundColor: backgroundColor ? themeData['tile.default.level300To350BackgroundColor'] : 'none',
      width: '100%',
    },
    higTileNotifications: {
      position: 'absolute',
      zIndex: '3',
      top: '-10px',
      right: '-5px',
    },
    higTileNotificationBadge: {

    },
    higTileSelectionOptions: {
      display: 'flex',
      justifyContent: 'space-evenly',
      position: 'absolute',
      zIndex: '3',
      top: '10px',
      left: '10px',
    },
    higTileSelectionOptionCheckbox: {
      padding: '0 5px 0 0'
    },
    higTileSelectionOptionPin: {

    },
    higTileHeader: {
      position: 'relative',
      margin: '0',
      padding: backgroundColor ? '0' : '10px',
      backgroundColor: backgroundColor ? backgroundColor : 'none',
      borderBottom: divider && backgroundColor ? `1px solid ${divider}` : 'none'
    },
    higTileActionClarifier: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    higTileActionClarifierButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50% 0',
    },
    higTileIdentifierContainer: {
      position: 'absolute',
      zIndex: '3',
      top: '-10px',
      left: '0px',
    },
    higTileIdentifierIcon: {
      backgroundColor: 'white',
      width: '50px',
      color: '#000',
    },
    higTileContent: {
      position: 'relative',
      padding: '10px'
    },
    higTileTitleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: themeData["tile.title.marginBottom"],
      marginBottom: themeData["tile.title.marginBottom"],
    },
    higTileTitle: {
      fontSize: themeData["tile.title.fontSize"],
      fontWeight: themeData["tile.title.fontWeight"],
      lineHeight: themeData["tile.title.lineHeight"],
    },
    higTileSubTitle: {
      fontSize: themeData["tile.subTitle.fontSize"],
      fontWeight: themeData["tile.subTitle.fontWeight"],
      lineHeight: themeData["tile.subTitle.lineHeight"],
    },
    higTileAdditionalContent: {
      padding: '5px 0',
    },
    higGroupIcons: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    higGroupIconItem: {
      // padding: '0 5px',
    },
    higVersionHolder: {
      marginTop: '5px',
    },
    higTileCTAHolder: {
      marginTop: '5px',
    }
  }
}
