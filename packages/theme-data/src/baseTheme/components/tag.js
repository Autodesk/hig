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
  "tag.label.fontColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.text.default"
    }
  },
  "tag.label.fontFamily": {
    type: FONT_FAMILY,
    value: {
      ref: "basics.fontFamilies.main"
    }
  },
  "tag.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "density.fontSizes.medium"
    }
  },
  "tag.label.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.medium"
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
      ref: "colorScheme.border.base"
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
      ref: "colorScheme.border.accent"
    }
  },
  "tag.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "tag.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "tag.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
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
      ref: "colorScheme.border.base"
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
      ref: "colorScheme.border.on"
    }
  },
  "tag.on.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.on.focus"
    }
  },
  "tag.on.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "tag.on.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "tag.on.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.hover"
    }
  },
  "tag.on.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on"
    }
  },
  "tag.on.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.background.empty.level100To250.pressed"
    },
    transform: {
      alpha: 0.7
    }
  },
  "tag.on.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.on"
    }
  }
};
