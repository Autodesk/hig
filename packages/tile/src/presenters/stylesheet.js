/* eslint-disable */

export default function stylesheet(props, themeData, metadata) {
  const {
    orientation,
    background,
    divider,
    hasFocus,
    hasHover,
    isPressed,
    surface,
    disabled,
  } = props;
  const surfaceLevel = Number(surface) < 300 ? '100To250' : '300To350';
  const bgType = background === 'solid' ? 'filled' : 'empty';
  const isColumn = orientation === 'vertical';
  const isNoBg = background === 'flat' && !hasFocus;
  const isHorizontal = orientation === 'horizontal';

  const getDefaultOutline = () => {
    const color = themeData[`tile.${bgType}.default.level${surfaceLevel}.borderColor`];
    return `1px solid ${color}`;
  }

  const getStylesByFocus = () => {
    if (isNoBg) return 'none';
    const outlineThickness = hasHover ? themeData['tile.borderWidth'] : '10px';
    const color = themeData[`tile.selected.hover.borderColor`];
    return {
      backgroundColor: hasHover ? themeData['tile.selected.hover.backgroundColor'] : themeData[`tile.${bgType}.focus.level${surfaceLevel}.backgroundColor`],
      outline: `${outlineThickness} solid ${color}`
    }
  }

  const getStylesByStatus = (status) => {
    if (isNoBg) return 'none';
    const color = themeData[`tile.${bgType}.${status}.level${surfaceLevel}.borderColor`];
    const borderWidth = themeData['tile.borderWidth'];
    return {
      backgroundColor: themeData[`tile.${bgType}.${status}.level${surfaceLevel}.backgroundColor`],
      outline: `${borderWidth} solid ${color}`
    }
  }

  const getStylesByDisabled = () => {
    return {
      opacity: themeData["colorScheme.opacity.disabled"],
      pointerEvents: 'none',
    }
  }

  const getDivider = () => {
    const dividerStyle = `${themeData['tile.borderWidth']} solid ${divider}`;
    if (isHorizontal) {
      return {
        borderRight: dividerStyle
      }
    }
    return {
      borderBottom: dividerStyle
    }
  }

  const getIdentifierHorizontal = () => ({ top: '20px', left: '-20px' });
  const getNotificationHorizontal = () => ({ left: '-5px' });
  const getSelectionOptionsHorizontal = () => ({ top: '22px' });
  const getActionClarifierHorizontal = () => ({ width: '50%', paddingTop: '50%', paddingLeft: '20px' });

  return {
    higTileContainer: {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: isColumn ? 'column' : 'row',
      backgroundColor: isNoBg ? 'none' : themeData[`tile.${bgType}.default.level${surfaceLevel}.backgroundColor`],
      width: '100%',
      minWidth: orientation === 'vertical' ? 'none' : '233px',
      outline: getDefaultOutline(),
      cursor: 'pointer',
      ...(hasHover ? getStylesByStatus('hover') : {}),
      ...(isPressed ? getStylesByStatus('pressed') : {}),
      ...(hasFocus ? getStylesByFocus() : {}),
      ...(disabled ? getStylesByDisabled() : {})
    },
    higTileNotifications: {
      position: 'absolute',
      zIndex: '3',
      top: '-10px',
      right: '-5px',
      ...(isHorizontal ? getNotificationHorizontal() : {})
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
      ...(isHorizontal ? getSelectionOptionsHorizontal() : {})
    },
    higTileSelectionOptionCheckbox: {
      padding: '0 5px 0 0'
    },
    higTileSelectionOptionPin: {

    },
    higTileHeader: {
      position: 'relative',
      margin: '0',
      padding: background ? '0' : themeData['tile.padding'],
      maxHeight: orientation === 'vertical' ? '164px' : 'none',
      overflow: 'hidden',
      ...(divider && background ? getDivider() : {})
    },
    higTileActionClarifier: {
      display: hasHover ? 'block' : 'none',
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
      padding: '30% 0',
      ...(isHorizontal ? getActionClarifierHorizontal() : {})
    },
    higTileIdentifierContainer: {
      position: 'absolute',
      zIndex: '3',
      top: '-10px',
      left: '0px',
      ...(isHorizontal ? getIdentifierHorizontal() : {})
    },
    higTileIdentifierIcon: {
      width: '50px',
      color: '#000',
      paddingLeft: themeData['tile.padding'],
    },
    higTileContent: {
      position: 'relative',
      padding: isHorizontal ? '20px' : themeData['tile.padding'],
      width: '100%',
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
    higTileOverflowMenu: {
      paddingRight: '20px',
    },
    higTileAdditionalContent: {
      padding: '5px 0',
    },
    higGroupIcons: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: themeData['tile.padding'],
    },
    higGroupIconItem: {
      paddingRight: themeData['tile.padding'],
    },
    higVersionHolder: {
      marginTop: themeData["tile.title.marginBottom"],
    },
    higTileCTAHolder: {
      zIndex: '10',
      marginTop: themeData["tile.title.marginBottom"],
      marginBottom: themeData["tile.title.marginBottom"],
    }
  }
}
