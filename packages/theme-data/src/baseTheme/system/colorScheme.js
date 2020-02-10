import { COLOR, OPACITY } from "../../consts/types";

export default {
  accentColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.reference.accent" }
    }
  },
  "reference.accent": { type: COLOR },
  baseColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.reference.base" }
    }
  },
  "reference.base": { type: COLOR },
  highShadowColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.shadow.high" }
    }
  },
  "shadow.high": { type: COLOR },
  iconColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.icon.default" }
    }
  },
  "icon.default": { type: COLOR },
  lowShadowColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.shadow.low" }
    }
  },
  "shadow.low": { type: COLOR },
  surfaceLevel100Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level100" }
    }
  },
  "surface.level100": { type: COLOR },
  surfaceLevel200Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level200" }
    }
  },
  "surface.level200": { type: COLOR },
  surfaceLevel250Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level250" }
    }
  },
  "surface.level250": { type: COLOR },
  surfaceLevel300Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level300" }
    }
  },
  "surface.level300": { type: COLOR },
  surfaceLevel350Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level350" }
    }
  },
  "surface.level350": { type: COLOR },
  "component.backgroundColor": {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level" }
    }
  },
  textColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.text.default" }
    }
  },
  "text.default": { type: COLOR },
  textColorDim: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.text.dim" }
    }
  },
  "text.dim": { type: COLOR },
  infoColor: {
    value: {
      ref: "basics.colors.autodeskBlue400"
    },
    type: COLOR
  },
  errorColor: {
    value: {
      ref: "colorScheme.status.error"
    },
    metadata: {
      deprecated: {
        equivalent: "colorScheme.status.error"
      }
    },
    type: COLOR
  },
  "status.error": {
    value: {
      ref: "basics.colors.secondary.red.500"
    },
    type: COLOR
  },
  successColor: {
    value: {
      ref: "colorScheme.status.success"
    },
    metadata: {
      deprecated: {
        equivalent: "colorScheme.status.success"
      }
    },
    type: COLOR
  },
  "status.success": {
    value: {
      ref: "basics.colors.secondary.green.500"
    },
    type: COLOR
  },
  warningColor: {
    value: {
      ref: "colorScheme.status.warning"
    },
    metadata: {
      deprecated: {
        equivalent: "colorScheme.status.warning"
      }
    },
    type: COLOR
  },
  "status.warning": {
    value: {
      ref: "basics.colors.secondary.yellowOrange.500"
    },
    type: COLOR
  },
  "status.info": {
    value: {
      ref: "colorScheme.reference.accent"
    },
    type: COLOR
  },
  "status.read": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.4
    },
    type: COLOR
  },
  "background.active": { type: COLOR },
  "background.hover": { type: COLOR },
  "background.on.default": { type: COLOR },
  "background.on.focus": { type: COLOR },
  "background.on.hover": { type: COLOR },
  "background.pressed": { type: COLOR },
  "background.selected": { type: COLOR },
  "border.default": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.5
    },
    type: COLOR
  },
  "border.focus": { type: COLOR },
  "border.hover": { type: COLOR },
  "border.pressed": { type: COLOR },
  disabledOpacity: {
    value: 0.4,
    type: OPACITY
  },
  "halo.focus": {
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.35
    },
    type: COLOR
  },
  "halo.hover": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.15
    },
    type: COLOR
  },
  "halo.pressed": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.25
    },
    type: COLOR
  },
  "icon.active": {
    value: {
      ref: "colorScheme.reference.accent"
    },
    type: COLOR
  },
  "icon.focus": { type: COLOR },
  "icon.hover": { type: COLOR },
  "icon.pressed": { type: COLOR },
  mask: {
    type: COLOR,
    value: {
      ref: "basics.colors.tertiary.pink.500"
    },
    transform: {
      alpha: 0
    }
  },
  transparent: {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0
    }
  },
  "divider.lightweight": { type: COLOR },
  "divider.heavyweight": { type: COLOR },
  "indicator.default": { type: COLOR },
  "indicator.focus": { type: COLOR },
  "indicator.hover": { type: COLOR },
  "indicator.pressed": {
    value: {
      ref: "colorScheme.reference.accent"
    },
    type: COLOR
  }
};
