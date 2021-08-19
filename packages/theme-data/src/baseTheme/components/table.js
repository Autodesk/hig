import {
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
  SHADOW
} from "../../consts/types";

export default {
  "table.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "table.background.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    },
    transform: {
      alpha: 0.8
    }
  },
  "table.borderRightColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "table.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "table.focus.haloWidth": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "table.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "table.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "table.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "table.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.mediumExtraLarge"
    }
  },
  "table.cell.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "table.cell.action.marginLeft": {
    type: LENGTH,
    value: {
      ref: "density.spacings.small"
    }
  },
  "table.cell.gutter": {
    type: LENGTH,
    value: {
      ref: "density.spacings.small"
    }
  },
  "table.cell.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.default"
    }
  },
  "table.cell.paddingHorizontal": {
    type: LENGTH,
    value: {
      ref: "density.spacings.medium"
    }
  },
  "table.cell.paddingVertical": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "table.cell.minHeight": {
    type: LENGTH,
    value: "32px"
  },
  "table.frozenColumn.shadowBlur": {
    type: SHADOW,
    value: {
      ref: "basics.shadows.lowBlur"
    }
  },
  "table.frozenColumn.shadowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.shadow.high"
    }
  },
  "table.cell.multiSelect.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.default"
    }
  },
  "table.cell.multiSelect.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.multiSelect.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus"
    }
  },
  "table.cell.multiSelect.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.cell.multiSelect.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover"
    }
  },
  "table.cell.multiSelect.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.multiSelect.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.pressed"
    }
  },
  "table.cell.multiSelect.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.null.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level300"
    }
  },
  "table.cell.selected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.cell.selected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on"
    }
  },
  "table.cell.selected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.cell.selected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.cell.selected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.cell.selected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.selected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.cell.selected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.unselected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.cell.unselected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.unselected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.cell.unselected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.cell.unselected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "table.cell.unselected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.cell.unselected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "table.cell.unselected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.header.minHeight": {
    type: LENGTH,
    value: "40px"
  },
  "table.header.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level350"
    },
    transform: {
      alpha: 0.4
    }
  },
  "table.header.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.default"
    }
  },
  "table.header.indicatorColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.indicator.default"
    }
  },
  "table.header.selected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "table.header.selected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.header.selected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "table.header.selected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.header.unselected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.header.unselected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.header.unselected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.header.unselected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.header.unselected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "table.header.unselected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.header.unselected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "table.header.unselected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.transparent"
    }
  },
  "table.header.default.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "table.header.selected.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "table.resize.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.heavyweight"
    }
  },
  "table.resize.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.row.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.row.checkbox.padding": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "table.row.unselected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.row.unselected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "table.row.unselected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent"
    }
  },
  "table.row.unselected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.row.unselected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "table.row.unselected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "table.row.unselected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    }
  },
  "table.row.unselected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight"
    }
  },
  "table.row.selected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.default"
    }
  },
  "table.row.selected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on"
    }
  },
  "table.row.selected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus"
    }
  },
  "table.row.selected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "table.row.selected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover"
    }
  },
  "table.row.selected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on"
    }
  },
  "table.row.selected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.pressed"
    }
  },
  "table.row.selected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on"
    }
  },
  "table.row.drag.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "table.row.drag.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "table.row.drag.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.icon.default"
    }
  },
  "table.row.drag.gutter": {
    type: LENGTH,
    value: {
      ref: "density.spacings.medium"
    }
  },
  "table.row.drag.paddingLeft": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "table.row.drag.paddingRight": {
    type: LENGTH,
    value: {
      ref: "density.spacings.medium"
    }
  },
  "table.row.drag.paddingVertical": {
    type: LENGTH,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "table.row.drag.shadowBlur": {
    type: SHADOW,
    value: {
      ref: "basics.shadows.lowBlur"
    }
  },
  "table.row.drag.shadowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.shadow.low"
    }
  },
  "table.zebraStripe.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level350"
    },
    transform: {
      alpha: 0.2
    }
  },
  /**
   * ## Deprecated
   *
   *
   */
  "table.item.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "table.cell.fontWeight"
    },
    metadata: {
      deprecated: {
        equivalent: "table.cell.fontWeight"
      }
    }
  },
  "table.row.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "table.row.unselected.hover.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "table.row.unselected.hover.backgroundColor"
      }
    }
  },
  "table.row.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "table.row.unselected.pressed.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "table.row.unselected.pressed.backgroundColor"
      }
    }
  },
  "table.row.selected.backgroundColor": {
    type: COLOR,
    value: {
      ref: "table.row.selected.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "table.row.selected.default.backgroundColor"
      }
    }
  },
  "table.header.borderTopColor": {
    type: COLOR,
    value: {
      ref: "table.row.unselected.default.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "table.row.unselected.default.borderColor"
      }
    }
  },
  "table.header.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "table.row.unselected.default.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "table.row.unselected.default.borderColor"
      }
    }
  }
};
