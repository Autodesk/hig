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
    selected,
  } = props;
  const surfaceLevel = Number(surface) < 300 ? '100To250' : '300To350';
  const bgType = background === 'solid' ? 'filled' : 'empty';
  const isColumn = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  
  const isMediumDensity = metadata.densityId === `medium-density`;

  const getStylesByStatus = (status, selected) => {
    const isFocus = status === 'focus';
    const color = selected
      ? themeData[`tile.selected.${status}.borderColor`]
      : themeData[`tile.${bgType}.${status}.level${surfaceLevel}.borderColor`];
    const borderWidth = themeData['tile.borderWidth'];
    if (selected) {
      return {
        background: themeData[`tile.selected.${status}.backgroundColor`],
        outlineColor: themeData["tile.selected.default.borderColor"],
        boxShadow: isFocus ? `0 0 0 ${themeData["tile.haloWidth"]} ${themeData["tile.focus.haloColor"]}` : 'none',
      };
    }
    console.log(status);
    console.log(`tile.${bgType}.${status}.level${surfaceLevel}.backgroundColor`, themeData[`tile.${bgType}.${status}.level${surfaceLevel}.backgroundColor`]);
    return {
      backgroundColor: themeData[`tile.${bgType}.${status}.level${surfaceLevel}.backgroundColor`],
      boxShadow: isFocus ? `0 0 0 ${themeData["tile.haloWidth"]} ${themeData["tile.focus.haloColor"]}` : 'none',
    }
  }

  const getStylesBySelected = (selected) => {
    if (selected) {
      return {
        backgroundColor: themeData['tile.selected.default.backgroundColor'],
        outlineColor: themeData["tile.selected.default.borderColor"],
      };
    }
    return {};
  };

  const getStylesByDisabled = () => {
    return {
      opacity: themeData["colorScheme.opacity.disabled"],
      pointerEvents: 'none',
    }
  }

  const getDivider = () => {
    const dividerStyle = `${themeData["divider.borderWidth"]} solid ${themeData["divider.lightColor"]}`;
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
    const topPlacement = themeData['density.spacings.medium'];
    return { top: `${topPlacement}`, left: '-18px' };
  }
  const getNotificationHorizontal = () => ({ left: '-5px' });
  const getSelectionOptionsHorizontal = () => ({ top: '22px' });
  const getTileContentPadding = () => {
    const marginLeft = bgType === "filled" ? themeData["tile.thumbnail.marginRight"] : 0;
    const verticalPadding = bgType === "empty"
      ? `0 ${themeData["tile.padding"]} ${themeData["tile.padding"]}`
      : themeData["tile.padding"];
  
    if (identifier) {
      return isHorizontal ? `12px 12px 12px calc(24px - ${marginLeft}px)` : verticalPadding;
    }
    return isHorizontal ? `5px 12px 12px ${marginLeft}` : verticalPadding;
  }
  const getTileHeaderFlatPadding = () => isHorizontal
    ? `${themeData["tile.padding"]} ${themeData["tile.thumbnail.marginRight"]} ${themeData["tile.padding"]} ${themeData["tile.padding"]}`
    : themeData["tile.padding"];

  return {
    higTileContainer: {
      backgroundColor: themeData[`tile.${bgType}.default.level${surfaceLevel}.backgroundColor`],
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: isColumn ? 'column' : 'row',
      width: '100%',
      minWidth: isColumn ? 'none' : '233px',
      outline: `${themeData["tile.borderWidth"]} solid transparent`,
      cursor: 'pointer',
      color: themeData["tile.fontColor"],
      fontFamily: themeData["tile.fontFamily"],
      transitionProperty: "background-color, box-shadow, opacity, outline",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "0.3s",
      ...(getStylesBySelected(selected)),
      ...(hasFocus ? getStylesByStatus('focus', selected) : {}),
      ...(hasHover ? getStylesByStatus('hover', selected) : {}),
      ...(isPressed ? getStylesByStatus('pressed', selected) : {}),
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
      padding: `0 ${themeData['density.spacings.extraExtraSmall']} 0 0`,
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
      overflow: 'hidden',
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
      padding: `${themeData['density.spacings.extraExtraLarge']} 0`,
    },
    higTileIdentifierContainer: {
      position: 'absolute',
      zIndex: '3',
      backgroundColor: 'white',
      padding: '1px',
      width: '30px',
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
      marginTop: themeData["density.spacings.extraSmall"],
      marginBottom: themeData["density.spacings.extraExtraSmall"],
      // uncomment this when theme-data has been updated
      // marginBottom: themeData["tile.title.marginBottom"],
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
      // this should be conditional in the complex version, as bottom padding should be w/ last element
      marginBottom: themeData["density.spacings.extraSmall"],
    },
    higTileOverflowMenu: {
      paddingRight: themeData["density.spacings.small"],
    },
    higTileAdditionalContent: {
      padding: `${themeData["density.spacings.extraExtraSmall"]}`,
    },
    higGroupIcons: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: themeData["density.spacings.small"],
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
      marginTop: themeData["density.spacings.extraSmall"],
    },
    higTileCTAHolder: {
      zIndex: '10',
      marginTop: themeData["density.spacings.extraSmall"],
      marginBottom: themeData["density.spacings.extraSmall"],
    }
  }
}
