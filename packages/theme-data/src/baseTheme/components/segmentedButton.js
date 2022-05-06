import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  SPACING
} from "../../consts/types";

export default {
  /**
   *  ## Deprecated
   *
   *
   */
  "segmentedButton.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "button.borderRadius"
    },
    metadata: {
      deprecated: {
        equivalent: "button.borderRadius"
      }
    }
  },
  "segmentedButton.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "button.borderWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "button.borderWidth"
      }
    }
  },
  "segmentedButton.gutterWidth": {
    type: LENGTH,
    value: {
      ref: "button.gutterWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "button.gutterWidth"
      }
    }
  },
  "segmentedButton.minWidth": {
    type: LENGTH,
    value: {
      ref: "button.minWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "button.minWidth"
      }
    }
  },
  "segmentedButton.paddingHorizontal": {
    type: SPACING,
    value: {
      ref: "button.paddingHorizontal"
    },
    metadata: {
      deprecated: {
        equivalent: "button.paddingHorizontal"
      }
    }
  },
  "segmentedButton.paddingVertical": {
    type: SPACING,
    value: {
      ref: "button.paddingVertical"
    },
    metadata: {
      deprecated: {
        equivalent: "button.paddingVertical"
      }
    }
  },
  "segmentedButton.default.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.default.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.default.backgroundColor"
      }
    }
  },
  "segmentedButton.hover.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.hover.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.hover.backgroundColor"
      }
    }
  },
  "segmentedButton.focus.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.focus.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.focus.backgroundColor"
      }
    }
  },
  "segmentedButton.pressed.backgroundColor": {
    type: COLOR,
    value: {
      ref: "button.outline.pressed.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.active.backgroundColor"
      }
    }
  },
  "segmentedButton.default.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.default.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.default.borderColor"
      }
    }
  },
  "segmentedButton.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.hover.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.hover.borderColor"
      }
    }
  },
  "segmentedButton.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.focus.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.focus.borderColor"
      }
    }
  },
  "segmentedButton.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "button.outline.pressed.borderColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.active.borderColor"
      }
    }
  },
  "segmentedButton.hover.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "button.hover.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "button.hover.haloWidth"
      }
    }
  },
  "segmentedButton.focus.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "button.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "button.haloWidth"
      }
    }
  },
  "segmentedButton.pressed.haloWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "button.pressed.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "button.pressed.haloWidth"
      }
    }
  },
  "segmentedButton.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "button.hover.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.hover.haloColor"
      }
    }
  },
  "segmentedButton.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "button.focus.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.focus.haloColor"
      }
    }
  },
  "segmentedButton.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "button.pressed.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.pressed.haloColor"
      }
    }
  },
  "segmentedButton.default.iconColor": {
    type: COLOR,
    value: {
      ref: "button.outline.iconColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.outline.iconColor"
      }
    }
  },
  "segmentedButton.active.iconColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.surface.level250"
    },
    metadata: {
      deprecated: {
        equivalent: "button.outline.iconColor" 
      }
    }
  },
  "segmentedButton.active.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.active.backgroundColor"
      }
    }
  },
  "segmentedButton.label.fontSize": {
    type: FONT_SIZE,
    value: {
      ref: "button.label.fontSize"
    },
    metadata: {
      deprecated: {
        equivalent: "button.label.fontSize"
      }
    }
  },
  "segmentedButton.label.default.fontColor": {
    type: COLOR,
    value: {
      ref: "button.outline.label.fontColor"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.label.fontColor"
      }
    }
  },
  "segmentedButton.label.default.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "button.label.fontWeight"
    },
    metadata: {
      deprecated: {
        equivalent: "button.label.fontWeight"
      }
    }
  },
  "segmentedButton.label.active.fontColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.text.againstDark"
    },
    metadata: {
      deprecated: {
        equivalent: "button.segmented.label.fontColor"
      }
    }
  },
  "segmentedButton.label.active.fontWeight": {
    type: FONT_WEIGHT,
    value: {
      ref: "basics.fontWeights.bold"
    },
    metadata: {
      deprecated: {
        equivalent: "basics.fontWeights.bold" 
      }
    }
  }
};
