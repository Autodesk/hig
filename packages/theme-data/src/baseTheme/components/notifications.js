import {
  COLOR,
  BORDER_RADIUS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
  SHADOW
} from "../../consts/types";

export default {
  "notifications.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.large"
    }
  },
  "notifications.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "notifications.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "notifications.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "notifications.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "notifications.container.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "notifications.container.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "notifications.container.shadowBlur": {
    type: SHADOW,
    value: {
      ref: "basics.shadows.lowBlur"
    }
  },
  "notifications.container.shadowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.shadow.low"
    }
  },
  "notifications.statusIndicator.width": {
    type: LENGTH,
    value: "3px"
  },
  "notifications.header.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "notifications.header.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "notifications.header.lineHeight": {
    type: LINE_HEIGHT,
    value: "20px"
  },
  "notifications.toast.object.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small"
    }
  },
  "notifications.toast.object.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "notifications.toast.object.lineHeight": {
    type: LINE_HEIGHT,
    value: "16px"
  },
  "notifications.toast.description.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small"
    }
  },
  "notifications.toast.description.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "notifications.toast.description.lineHeight": {
    type: LINE_HEIGHT,
    value: "16px"
  }
};
