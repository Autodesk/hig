/* eslint-disable */

export default function stylesheet(props, themeData, metadata) {
  const {
    orientation,
    background,
    divider,
    identifier,
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
  
  const isMediumDensity = metadata.densityId === `medium-density`;

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

  const getIdentifierHorizontal = () => {
    const topPlacement = isMediumDensity ? '16px' : '12px';
    return { top: `${topPlacement}`, left: '-18px' };
  }
  const getNotificationHorizontal = () => ({ left: '-5px' });
  const getSelectionOptionsHorizontal = () => ({ top: '22px' });
  const getActionClarifierHorizontal = () => ({ paddingTop: `${isMediumDensity ? '4rem' : '2rem'}`});
  const getTileContentPadding = () => {
    if (identifier) {
      return isHorizontal ? '12px 12px 12px 36px' : '12px 12px 12px 8px';
    }
    if (!isMediumDensity) {
      return isHorizontal ? '5px 12px 12px 12px' : '12px 12px 12px 8px';
    }
    return '12px';
  }
  const getTileHeaderFlatPadding = () => {
    return isMediumDensity ? '12px' : '8px';
  }

  const getTitleMarginTop = () => {
    if (isHorizontal) {
      return '0';
    }
    return isMediumDensity ? '8px' : '4px';
  }

  return {
    higTileContainer: {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: isColumn ? 'column' : 'row',
      backgroundColor: isNoBg ? 'none' : themeData[`tile.${bgType}.default.level${surfaceLevel}.backgroundColor`],
      width: '100%',
      minWidth: isColumn ? 'none' : '233px',
      outline: getDefaultOutline(),
      cursor: 'pointer',
      color: themeData["tile.fontColor"],
      fontFamily: themeData["tile.fontFamily"],
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
      padding: `0 ${isMediumDensity ? '4px' : '2px'} 0 0`
    },
    higTileSelectionOptionPin: {

    },
    higTileHeader: {
      position: 'relative',
      margin: '0',
      padding: background === 'solid' ? '0' : getTileHeaderFlatPadding(),
      overflow: 'hidden',
      ...(divider && background === 'solid' ? getDivider() : {})
    },
    higTileHeaderContainer: {
      position: 'relative',
      maxHeight: isColumn ? '140px' : '108px',
      width: '100%',
      height: '100%',
      backgroundColor: hasHover ? 'rgba(0, 0, 0, 0.5)' : 'none',
    },
    higTileActionClarifier: {
      zIndex: '10',
      display: hasHover ? 'block' : 'none',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    higTileActionClarifierButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: `${isMediumDensity ? '48px' : '32px'} 0`,
      ...(isHorizontal ? getActionClarifierHorizontal() : {})
    },
    higTileIdentifierContainer: {
      position: 'absolute',
      zIndex: '3',
      backgroundColor: 'white',
      padding: '1px',
      width: `${isMediumDensity ? '30px' : '30px'}`,
      top: `${isMediumDensity ? '-25px' : '-20px'}`,
      left: '0px',
      ...(isHorizontal ? getIdentifierHorizontal() : {})
    },
    higTileIdentifierIcon: {
      width: '50px',
      color: '#000',
      padding: isMediumDensity ? '2px 4px 0px 4px' : '4px 8px 0px 8px',
    },
    higTileContent: {
      boxSizing: 'border-box',
      position: 'relative',
      padding: getTileContentPadding(),
      width: '100%',
    },
    higTileTitleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: getTitleMarginTop(),
      marginBottom: isMediumDensity ? '4px' : '2px',
    },
    higTileTitle: {
      fontSize: themeData["tile.title.fontSize"],
      fontWeight: '700',
      lineHeight: themeData["tile.title.lineHeight"],
    },
    higTileSubTitle: {
      fontSize: themeData["tile.subTitle.fontSize"],
      fontWeight: themeData["tile.subTitle.fontWeight"],
      lineHeight: themeData["tile.subTitle.lineHeight"],
    },
    higTileOverflowMenu: {
      paddingRight: isMediumDensity ? '12px' : '8px',
    },
    higTileAdditionalContent: {
      padding: `${isMediumDensity ? '4px' : '2px'} 0`,
    },
    higGroupIcons: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: isMediumDensity ? '12px' : '8px',
      "> div": {
        alignItems: "center",
        display: "flex",
        minHeight: isMediumDensity ? '36px' : '24px',
        minWidth: isMediumDensity ? '36px' : '24px',
      }
    },
    higGroupIconItem: {
      // paddingRight: themeData['tile.padding'],
    },
    higVersionHolder: {
      marginTop: isMediumDensity ? '8px' : '4px',
    },
    higTileCTAHolder: {
      zIndex: '10',
      marginTop: isMediumDensity ? '8px' : '4px',
      marginBottom: isMediumDensity ? '8px' : '4px',
    }
  }
}
