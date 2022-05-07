import {
  BORDER_WIDTH,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "../../consts/types";

export default {
  "canvasFrame.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default",
    },
  },
  "canvasFrame.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main",
    },
  },
  "canvasFrame.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium",
    },
  },
  "canvasFrame.label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium",
    },
  },
  "canvasFrame.label.marginLeft": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "canvasFrame.border.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500",
    },
  },
  "canvasFrame.border.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium",
    },
  },
  "canvasFrame.controlPanel.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100",
    },
  },
  "canvasFrame.controlPanel.paddingRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
  "canvasFrame.controlPanel.paddingLeft": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall",
    },
  },
  "canvasFrame.controlPanel.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall",
    },
  },
  "canvasFrame.closeIcon.marginLeft": {
    type: SPACING,
    value: {
      ref: "density.spacings.small",
    },
  },
};
