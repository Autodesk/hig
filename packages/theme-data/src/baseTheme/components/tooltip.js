import {
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
  SPACING,
} from "../../consts/types";

export default {
  "tooltip.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.surface.darkGray.100",
    },
  },
  "tooltip.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium",
    },
  },
  "tooltip.shadowBlur": {
    type: LENGTH,
    value: {
      ref: "basics.shadows.highBlur",
    },
  },
  "tooltip.shadowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.shadow.high",
    },
  },
  "tooltip.title.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level200",
    },
  },
  "tooltip.title.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "tooltip.title.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.highMedium",
    },
  },
  "tooltip.title.fontWeight": {
    type: FONT_WEIGHT,
    value: 700,
  },
  "tooltip.title.lineHeight": {
    type: LINE_HEIGHT,
    value: 1.333333333,
  },
  "tooltip.nub.hypotenuseLength": {
    type: LENGTH,
    value: "16px",
  },
  "tooltip.description.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level200",
    },
  },
  "tooltip.description.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "tooltip.description.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.highMedium",
    },
  },
  "tooltip.description.fontWeight": {
    type: FONT_WEIGHT,
    value: 400,
  },
  "tooltip.description.lineHeight": {
    type: LINE_HEIGHT,
    value: 1.333333333,
  },
  "tooltip.divider.borderBottomColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white",
    },
    transform: {
      alpha: 0.1,
    },
  },
  "tooltip.link.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.textLink.primary.againstDark",
    },
  },
  "tooltip.link.paddingTop": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highMedium",
    },
  },
  "tooltip.paddingHorizontal": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highMedium",
    },
  },
  "tooltip.small.paddingVertical": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highSmall",
    },
  },
  "tooltip.medium.paddingVertical": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highMedium",
    },
  },
  "tooltip.medium.spaceBetween": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highSmall",
    },
  },
  "tooltip.large.paddingVertical": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highMedium",
    },
  },
  "tooltip.large.spaceBetween": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highMedium",
    },
  },
  "tooltip.maxWidth": { 
    type: LENGTH,
    value: "240px",
  },
  "tooltip.nub.width": {
    type: LENGTH,
    value: "8px",
  },
  "tooltip.nub.height": {
    type: LENGTH,
    value: "4px",
  },
  "tooltip.nub.padding": {
    type: SPACING,
    value: {
      ref: "basics.spacings.highSmall",
    },
  },
  "tooltip.nub.spaceBetween": {
    type: SPACING,
    value: {
      ref: "basics.spacings.highExtraSmall",
    },
  },
  "tooltip.shortcut.paddingHorizontal": { 
    type: SPACING,
    value: {
      ref: "basics.spacings.highExtraSmall",
    },
  },
  "tooltip.shortcut.height": {
    type: LENGTH,
    value: "16px",
  },
  "tooltip.shortcut.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.medium",
    },
  },
  "tooltip.shortcut.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.700",
    },
  },
  "tooltip.shortcut.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level200",
    },
  },
  "tooltip.shortcut.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "tooltip.shortcut.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "basics.fontSizes.highMedium",
    },
  },
  "tooltip.shortcut.fontWeight": {
    type: FONT_WEIGHT,
    value: 400,
  },
  "tooltip.shortcut.lineHeight": {
    type: LINE_HEIGHT,
    value: 1.333333333,
  },
};
