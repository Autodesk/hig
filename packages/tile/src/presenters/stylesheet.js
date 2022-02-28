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
      backgroundColor: backgroundColor ? backgroundColor : 'none',
      width: '100%',
    },
    higTileNotifications: {
      position: 'absolute',
      zIndex: '3',
      top: '-10px',
      right: '-5px',
    },
    higTileNotificationBadge: {
      backgroundColor: 'grey',
      width: '50px',
      color: '#fff',
    },
    higTileHeader: {
      margin: '0',
      padding: backgroundColor ? '0' : '10px',
      backgroundColor: backgroundColor ? backgroundColor : 'none',
      borderBottom: divider && backgroundColor ? `1px solid ${divider}` : 'none'
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
      marginTop: '10px',
    },
    higTileTitle: {

    },
    higTileSubTitle: {

    },
    higTileAdditionalContent: {
      padding: '5px 0',
    },
    higVersionHolder: {
      marginTop: '5px',
    },
    higTileCTAHolder: {
      marginTop: '5px',
    }
  }
}
