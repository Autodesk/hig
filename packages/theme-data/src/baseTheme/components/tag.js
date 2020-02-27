import {
  BORDER_RADIUS,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  "tag.borderWidth": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "tag.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.pill"
    }
  },
  "tag.hover.haloWidth": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "tag.focus.haloWidth": {
    type: LENGTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "tag.paddingLeft": {
    type: SPACING,
    value: {
      ref: "density.spacings.small"
    }
  },
  "tag.paddingRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "tag.paddingVertical": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "tag.label.marginRight": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "tag.label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
    }
  },
  "tag.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "tag.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "tag.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "tag.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.7
    }
  },
  "tag.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "tag.on.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.default"
    }
  },
  "tag.on.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "tag.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.hover"
    }
  },
  "tag.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "tag.hover.on.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.hover"
    }
  },
  "tag.hover.on.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "tag.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.6
    }
  },
  "tag.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.focus"
    }
  },
  "tag.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "tag.focus.on.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus"
    }
  },
  "tag.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.7
    }
  },
  "tag.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  },
  "tag.pressed.on.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    },
    transform: {
      alpha: 0.7
    }
  },
  "tag.pressed.on.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.default"
    }
  }
};
