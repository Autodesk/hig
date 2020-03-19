import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  "toggle.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.pill"
    }
  },
  "toggle.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "toggle.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "toggle.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "toggle.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "toggle.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "toggle.minHeight": {
    type: LENGTH,
    value: "20px"
  },
  "toggle.minWidth": {
    type: LENGTH,
    value: "37px"
  },
  "toggle.padding": {
    type: SPACING,
    value: {
      ref: "density.spacings.extraExtraSmall"
    }
  },
  "toggle.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "toggle.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "toggle.thumb.borderRadii": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.ellipse"
    }
  },
  "toggle.thumb.minDiameter": {
    type: LENGTH,
    value: "12px"
  },
  "toggle.thumb.on.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "toggle.thumb.off.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "toggle.off.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "toggle.off.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
    }
  },
  "toggle.off.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "toggle.off.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "toggle.off.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "toggle.off.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
    }
  },
  "toggle.off.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "toggle.off.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
    }
  },
  "toggle.on.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500"
    }
  },
  "toggle.on.default.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.autodeskBlue.500"
    }
  }
};
