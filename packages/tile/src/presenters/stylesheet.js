export default function stylesheet(props, themeData, metadata) {
  const {
    orientation,
    backgroundColor,
    divider
  } = props;
  const isColumn = orientation === 'vertical';
  return {
    higTileContainer: {
      display: 'flex',
      flexDirection: isColumn ? 'column' : 'row',
      backgroundColor: backgroundColor ? backgroundColor : 'none',
      width: '100%',
    },
    higTileHeader: {
      margin: '0',
      padding: '0',
      borderBottom: divider && backgroundColor ? `1px solid ${divider}` : 'none'
    },
    higTileContent: {
      padding: '10px'
    },
    higTileTitle: {

    },
    higTileSubTitle: {

    }
  }
}
