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
  "notification.container.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level100"
    }
  },
  "notification.container.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
    }
  },
  "notification.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.large"
    }
  },
  "notification.container.shadowBlur": {
    type: SHADOW,
    value: {
      ref: "basics.shadows.lowBlur"
    }
  },
  "notification.container.shaowColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.shadow.low"
    }
  },
  "notification.statusIndicator.width": {
    type: LENGTH,
    value: "3px"
  },
  "notification.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "notification.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "notification.header.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "notification.header.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "notification.header.lineHeight": {
    type: LINE_HEIGHT,
    value: "16px"
  },
  "notification.toast.object.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small"
    }
  },
  "notification.toast.object.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    }
  },
  "notification.toast.object.lineHeight": {
    type: LINE_HEIGHT,
    value: "16px"
  },
  "notification.toast.description.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.small"
    }
  },
  "notification.toast.description.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.regular"
    }
  },
  "notification.toast.description.lineHeight": {
    type: LINE_HEIGHT,
    value: "16px"
  },
  "notification.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.transparent"
    }
  },
  "notification.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.hover"
    }
  }
};
