import {
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING
} from "../../consts/types";

export default {
  "token.borderRadii": {
    value: {
      ref: "basics.borderRadii.none"
    },
    type: BORDER_RADIUS
  },
  "token.paddingLeft": {
    value: {
      ref: "density.spacings.extraSmall"
    },
    type: SPACING
  },
  "token.paddingRight": {
    value: {
      ref: "density.spacings.extraExtraSmall"
    },
    type: SPACING
  },
  "token.paddingVertical": {
    value: {
      ref: "density.spacings.extraExtraSmall"
    },
    type: SPACING
  },
  "token.default.backgroundColor": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.15
    },
    type: COLOR
  },
  "token.hover.backgroundColor": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.25
    },
    type: COLOR
  },
  "token.pressed.backgroundColor": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.35
    },
    type: COLOR
  },
  "token.default.borderColor": {
    value: {
      ref: "colorScheme.background.transparent"
    },
    type: COLOR
  },
  "token.hover.borderColor": {
    value: {
      ref: "colorScheme.background.transparent"
    },
    type: COLOR
  },
  "token.pressed.borderColor": {
    value: {
      ref: "colorScheme.background.transparent"
    },
    type: COLOR
  },
  "token.selected.default.backgroundColor": {
    value: {
      ref: "colorScheme.background.on.default"
    },
    type: COLOR
  },
  "token.selected.hover.backgroundColor": {
    value: {
      ref: "colorScheme.background.on.hover"
    },
    type: COLOR
  },
  "token.selected.pressed.backgroundColor": {
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    },
    type: COLOR
  },
  "token.selected.default.borderColor": {
    value: {
      ref: "colorScheme.border.on"
    },
    type: COLOR
  },
  "token.selected.hover.borderColor": {
    value: {
      ref: "colorScheme.border.on"
    },
    type: COLOR
  },
  "token.selected.pressed.borderColor": {
    value: {
      ref: "colorScheme.border.on"
    },
    type: COLOR
  },
  "token.warning.default.backgroundColor": {
    value: {
      ref: "colorScheme.status.warning"
    },
    transform: {
      alpha: 0.15
    },
    type: COLOR
  },
  "token.warning.hover.backgroundColor": {
    value: {
      ref: "colorScheme.status.warning"
    },
    transform: {
      alpha: 0.3
    },
    type: COLOR
  },
  "token.warning.iconColor": {
    value: {
      ref: "colorScheme.status.warning"
    },
    type: COLOR
  },
  "token.icon.marginRight": {
    value: {
      ref: "density.spacings.extraSmall"
    },
    type: SPACING
  },
  "token.label.fontColor": {
    value: {
      ref: "colorScheme.text.default"
    },
    type: COLOR
  },
  "token.label.fontFamily": {
    value: {
      ref: "basics.fontFamilies.main"
    },
    type: FONT_FAMILY
  },
  "token.label.fontSize": {
    value: {
      ref: "density.fontSizes.medium"
    },
    type: FONT_SIZE
  },
  "token.label.fontWeight": {
    value: {
      ref: "basics.fontWeights.medium"
    },
    type: FONT_WEIGHT
  },
  "token.label.marginRight": {
    value: {
      ref: "density.spacings.extraExtraSmall"
    },
    type: SPACING
  },
  "token.closeButton.iconColor": {
    value: {
      ref: "basics.colors.icon.lightGray"
    },
    type: COLOR
  }
};
