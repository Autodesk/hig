import { COLOR, BORDER_WIDTH, BORDER_RADIUS, LENGTH } from "../../consts/types";

export default {
  "checkbox.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.small"
    }
  },
  "checkbox.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "checkbox.halo.color": {
    type: COLOR,
    value: {
      ref: "checkbox.hover.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.hover.haloColor"
      }
    }
  },
  "checkbox.halo.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.hover.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.hover.haloWidth"
      }
    }
  },
  "checkbox.minHeight": {
    type: LENGTH,
    value: "16px"
  },
  "checkbox.height": {
    type: LENGTH,
    value: {
      ref: "checkbox.minHeight"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.minHeight"
      }
    }
  },
  "checkbox.indicatorColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.white"
    }
  },
  "checkbox.iconColor": {
    type: COLOR,
    value: {
      ref: "checkbox.indicatorColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.indicatorColor"
      }
    }
  },
  "checkbox.minWidth": {
    type: LENGTH,
    value: "16px"
  },
  "checkbox.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.minWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.minWidth"
      }
    }
  },
  "checkbox.unchecked.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "checkbox.backgroundColor": {
    type: COLOR,
    value: {
      ref: "checkbox.unchecked.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.unchecked.default.backgroundColor"
      }
    }
  },
  "checkbox.unchecked.default.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
    }
  },
  "checkbox.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.unchecked.default.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.unchecked.default.borderColor"
      }
    }
  },
  "checkbox.unchecked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
    }
  },
  "checkbox.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.unchecked.hover.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.unchecked.hover.borderColor"
      }
    }
  },
  "checkbox.hover.halo.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.hover.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.hover.haloWidth"
      }
    }
  },
  "checkbox.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "checkbox.hover.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.hover.haloColor"
      }
    }
  },
  "checkbox.unchecked.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.accent"
    }
  },
  "checkbox.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.unchecked.focus.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.unchecked.focus.borderColor"
      }
    }
  },
  "checkbox.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "checkbox.focus.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.focus.haloColor"
      }
    }
  },
  "checkbox.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.focus.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.focus.haloWidth"
      }
    }
  },
  "checkbox.unchecked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.border.base"
    }
  },
  "checkbox.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.unchecked.pressed.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.unchecked.pressed.borderColor"
      }
    }
  },
  "checkbox.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "checkbox.pressed.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.pressed.haloColor"
      }
    }
  },
  "checkbox.pressed.halo.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.pressed.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.pressed.haloWidth"
      }
    }
  },
  "checkbox.checked.default.borderColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    }
  },
  "checkbox.checked.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.default.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.default.borderColor"
      }
    }
  },
  "checkbox.checked.iconColor": {
    type: COLOR,
    value: {
      ref: "checkbox.indicatorColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.indicatorColor"
      }
    }
  },
  "checkbox.checked.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    }
  },
  "checkbox.checked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.default.backgroundColor"
      }
    }
  },
  "checkbox.indeterminate.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.default.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.default.borderColor"
      }
    }
  },
  "checkbox.indeterminate.iconColor": {
    type: COLOR,
    value: {
      ref: "checkbox.indicatorColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.indicatorColor"
      }
    }
  },
  "checkbox.indeterminate.backgroundColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.default.backgroundColor"
      }
    }
  },
  "checkbox.checked.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.default.backgroundColor"
    }
  },
  "checkbox.focus.checked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.focus.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.focus.backgroundColor"
      }
    }
  },
  "checkbox.checked.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.default.borderColor"
    }
  },
  "checkbox.focus.checked.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.focus.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.focus.borderColor"
      }
    }
  },
  "checkbox.focus.indeterminate.borderColor": {
    type: COLOR,
    value: {
      ref: "checkbox.checked.focus.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "checkbox.checked.focus.borderColor"
      }
    }
  },
  "checkbox.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "checkbox.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "checkbox.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "checkbox.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "checkbox.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.medium"
    }
  },
  "checkbox.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "basics.borderWidths.large"
    }
  },
  "checkbox.unchecked.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "checkbox.unchecked.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "checkbox.unchecked.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.opacity.transparent"
    }
  },
  "checkbox.checked.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "checkbox.checked.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "checkbox.checked.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  },
  "checkbox.checked.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    }
  }
};
