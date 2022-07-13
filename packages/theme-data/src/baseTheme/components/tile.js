import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  LENGTH,
  OPACITY,
  SPACING,
} from "../../consts/types";

export default {
  "tile.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none",
    },
  },
  "tile.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "tile.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large",
    },
  },
  "tile.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "tile.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "tile.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "tile.thumbnail.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.title.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "tile.title.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold",
    },
  },
  "tile.title.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.highExtraLarge",
    },
  },
  "tile.title.marginBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall",
    },
  },
  "tile.subTitle.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small",
    },
  },
  "tile.subTitle.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular",
    },
  },
  "tile.subTitle.lineHeight": {
    type: LINE_HEIGHT,
    value: {
      ref: "basics.lineHeights.highMedium",
    },
  },
  "tile.selected.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.default",
    },
  },
  "tile.selected.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover",
    },
  },
  "tile.selected.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus",
    },
  },
  "tile.selected.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.pressed",
    },
  },
  "tile.selected.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on",
    },
  },
  "tile.selected.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on",
    },
  },
  "tile.selected.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent",
    },
  },
  "tile.selected.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on",
    },
  },
  "tile.filled.default.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level100To250.default",
    },
  },
  "tile.filled.hover.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level100To250.hover",
    },
  },
  "tile.filled.focus.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level100To250.focus",
    },
  },
  "tile.filled.pressed.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level100To250.pressed",
    },
  },
  "tile.filled.default.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.hover.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.focus.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.pressed.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.default.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level300To350.default",
    },
  },
  "tile.filled.hover.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level300To350.hover",
    },
  },
  "tile.filled.focus.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level300To350.focus",
    },
  },
  "tile.filled.pressed.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.filled.level300To350.pressed",
    },
  },
  "tile.filled.default.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.hover.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.focus.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.filled.pressed.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.default.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.hover.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover",
    },
  },
  "tile.empty.focus.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.pressed.level100To250.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed",
    },
  },
  "tile.empty.default.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.hover.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.focus.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.pressed.level100To250.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.default.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.hover.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.hover",
    },
  },
  "tile.empty.focus.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.pressed.level300To350.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.pressed",
    },
  },
  "tile.empty.default.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.hover.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.hover",
    },
  },
  "tile.empty.focus.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.transparent",
    },
  },
  "tile.empty.pressed.level300To350.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level300To350.pressed",
    },
  },
  "tile.actions.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level300",
    },
    transform: {
      alpha: 0.95
    },
  },
  "tile.actions.vertical.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.actions.vertical.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall",
    },
  },
  "tile.actions.horizontal.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall",
    },
  },
  "tile.actions.horizontal.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.divider.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.divider.lightweight",
    },
  },
  "tile.divider.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "tile.checkboxContainer.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.checkbox.unchecked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.surface.darkGray.100",
    },
  },
  "tile.checkbox.checked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "tile.checkbox.indicatorColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.900",
    },
  },
  "tile.checkbox.borderWidth": {
    type: COLOR,
    value: {
      ref: "basics.colors.surface.darkGray.100",
    },
  },
  "tile.checkbox.unchecked.default.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.900",
    },
    transform: {
      alpha: 0.5
    },
  },
  "tile.checkbox.unchecked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "tile.checkbox.unchecked.default.borderColor",
    },
  },
  "tile.checkbox.unchecked.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.400",
    },
  },
  "tile.checkbox.unchecked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "tile.checkbox.unchecked.default.borderColor",
    },
  },
  "tile.checkbox.checked.default.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
  },
  "tile.checkbox.checked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "tile.checkbox.checked.default.borderColor",
    },
  },
  "tile.checkbox.checked.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "tile.checkbox.checked.default.borderColor",
    },
  },
  "tile.checkbox.checked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "tile.checkbox.checked.default.borderColor",
    },
  },
  "tile.checkbox.hover.haloWidth": {
    type: COLOR,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "tile.checkbox.focus.haloWidth": {
    type: COLOR,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "tile.checkbox.pressed.haloWidth": {
    type: COLOR,
    value: {
      ref: "basics.borderWidths.large",
    },
  },
  "tile.checkbox.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.900",
    },
    transform: {
      alpha: 0.15
    },
  },
  "tile.checkbox.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.400",
    },
    transform: {
      alpha: 0.35
    },
  },
  "tile.checkbox.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.900",
    },
    transform: {
      alpha: 0.25
    },
  },
  "tile.title.paddingTop": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall",
    },
  },
  "tile.subtitle.paddingBottom": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.children.spaceBetween": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.children.paddingBottom": {
    type: LENGTH,
    value: {
      ref: "density.spacings.small",
    },
  },
  "tile.gradient.height": {
    type: LENGTH,
    value: "60px",
  },
  "tile.gradient.start.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.black",
    },
  },
  "tile.gradient.end.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.300",
    },
    transform: {
      alpha: 0.0
    },
  },
  "tile.gradient.opacity": {
    type: OPACITY,
    value: "0.85",
  },
};
