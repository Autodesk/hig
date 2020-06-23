import { COLOR, OPACITY } from "../../consts/types";

export default {
  "reference.accent": { type: COLOR },
  "reference.base": { type: COLOR },
  "surface.level100": { type: COLOR },
  "surface.level200": { type: COLOR },
  "surface.level250": { type: COLOR },
  "surface.level300": { type: COLOR },
  "surface.level350": { type: COLOR },
  "background.selected": { type: COLOR },
  "background.on.default": { type: COLOR },
  "background.on.hover": { type: COLOR },
  "background.on.focus": { type: COLOR },
  "background.on.pressed": { type: COLOR },
  "background.empty.level100To250.hover": { type: COLOR },
  "background.empty.level100To250.pressed": { type: COLOR },
  "background.empty.level300To350.hover": { type: COLOR },
  "background.empty.level300To350.pressed": { type: COLOR },
  "background.filled.level100To250.default": { type: COLOR },
  "background.filled.level100To250.hover": { type: COLOR },
  "background.filled.level100To250.focus": { type: COLOR },
  "background.filled.level100To250.pressed": { type: COLOR },
  "background.filled.level300To350.default": { type: COLOR },
  "background.filled.level300To350.hover": { type: COLOR },
  "background.filled.level300To350.focus": { type: COLOR },
  "background.filled.level300To350.pressed": { type: COLOR },
  "background.transparent": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0
    }
  },
  "border.base": {
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.5
    },
    type: COLOR
  },
  "border.accent": { type: COLOR },
  "border.on": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.5
    }
  },
  "border.transparent": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0
    }
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
  "halo.focus": {
    value: {
      ref: "colorScheme.reference.accent"
    },
    transform: {
      alpha: 0.35
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
  "shadow.high": { type: COLOR },
  "shadow.low": { type: COLOR },
  "text.default": { type: COLOR },
  "text.dim": { type: COLOR },
  "text.placeholder": { type: COLOR },
  "text.active": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.accent"
    }
  },
  "icon.default": { type: COLOR },
  "icon.hover": { type: COLOR },
  "icon.focus": { type: COLOR },
  "icon.pressed": { type: COLOR },
  "icon.on.default": { type: COLOR },
  "icon.on.hover": { type: COLOR },
  "icon.on.focus": { type: COLOR },
  "icon.on.pressed": { type: COLOR },
  "indicator.default": { type: COLOR },
  "indicator.hover": { type: COLOR },
  "indicator.focus": { type: COLOR },
  "indicator.pressed": {
    value: {
      ref: "colorScheme.reference.accent"
    },
    type: COLOR
  },
  "status.error": {
    value: {
      ref: "basics.colors.secondary.red.600"
    },
    type: COLOR
  },
  "status.success": {
    value: {
      ref: "basics.colors.secondary.green.500"
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
  "divider.lightweight": { type: COLOR },
  "divider.heavyweight": { type: COLOR },
  "opacity.mask": {
    type: COLOR,
    value: {
      ref: "basics.colors.tertiary.pink.600"
    }
  },
  "opacity.disabled": {
    value: 0.4,
    type: OPACITY
  },
  /**
   *  ## Deprecated
   *
   *
   */
  accentColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.reference.accent" }
    }
  },
  baseColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.reference.base" }
    }
  },
  surfaceLevel100Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level100" }
    }
  },
  surfaceLevel200Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level200" }
    }
  },
  surfaceLevel250Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level250" }
    }
  },
  surfaceLevel300Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level300" }
    }
  },
  surfaceLevel350Color: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level350" }
    }
  },
  highShadowColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.shadow.high" }
    }
  },
  lowShadowColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.shadow.low" }
    }
  },
  textColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.text.default" }
    }
  },
  textColorDim: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.text.dim" }
    }
  },
  iconColor: {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.icon.default" }
    }
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
  infoColor: {
    value: {
      ref: "colorScheme.status.info"
    },
    metadata: {
      deprecated: {
        equivalent: "colorScheme.status.info"
      }
    },
    type: COLOR
  },
  "component.backgroundColor": {
    type: COLOR,
    metadata: {
      deprecated: { equivalent: "colorScheme.surface.level" }
    }
  }
};
