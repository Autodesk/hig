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
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
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
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.15
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
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.25
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
      ref: "basics.colors.white"
    }
  },
  "toggle.thumb.off.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "toggle.off.default.backgroundColor": {
    type: COLOR,
    value: "rgba(255, 255, 255, 0)"
  },
  "toggle.off.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "toggle.off.focus.backgroundColor": {
    type: COLOR,
    value: "rgba(255, 255, 255, 0)"
  },
  "toggle.off.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "toggle.off.hover.backgroundColor": {
    type: COLOR,
    value: "rgba(255, 255, 255, 0)"
  },
  "toggle.off.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "toggle.off.pressed.backgroundColor": {
    type: COLOR,
    value: "rgba(255, 255, 255, 0)"
  },
  "toggle.off.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "toggle.on.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  },
  "toggle.on.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    }
  }
};
