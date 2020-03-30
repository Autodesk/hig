import { COLOR, LENGTH } from "../../consts/types";

export default {
  "slider.halo.width": {
    type: LENGTH,
    value: 0,
    metadata: {
      deprecated: {
        equivalent: "slider.hover.haloWidth"
      }
    }
  },
  "slider.halo.color": {
    type: COLOR,
    value: {
      ref: "slider.hover.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.hover.haloColor"
      }
    }
  },
  "slider.thumbColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    }
  },
  "slider.thumb.backgroundColor": {
    type: COLOR,
    value: {
      ref: "slider.thumbColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.thumbColor"
      }
    }
  },
  "slider.thumb.minWidth": {
    type: LENGTH,
    value: "6px"
  },
  "slider.thumb.width": {
    type: LENGTH,
    value: {
      ref: "slider.thumb.minWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.thumb.minWidth"
      }
    }
  },
  "slider.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus"
    }
  },
  "slider.focused.halo.color": {
    type: COLOR,
    value: {
      ref: "slider.focus.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.focus.haloColor"
      }
    }
  },
  "slider.focus.haloWidth": {
    type: LENGTH,
    value: "2px"
  },
  "slider.focused.halo.width": {
    type: LENGTH,
    value: {
      ref: "slider.focus.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.focus.haloWidth"
      }
    }
  },
  "slider.focused.thumb.color": {
    type: COLOR,
    value: {
      ref: "slider.thumbColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.thumbColor"
      }
    }
  },
  "slider.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover"
    }
  },
  "slider.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "slider.hover.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.hover.haloColor"
      }
    }
  },
  "slider.hover.haloWidth": {
    type: LENGTH,
    value: "2px"
  },
  "slider.hover.halo.width": {
    type: LENGTH,
    value: {
      ref: "slider.hover.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.hover.haloWidth"
      }
    }
  },
  "slider.hover.thumb.color": {
    type: COLOR,
    value: {
      ref: "slider.thumbColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.thumbColor"
      }
    }
  },
  "slider.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed"
    }
  },
  "slider.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "slider.pressed.haloColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.pressed.haloColor"
      }
    }
  },
  "slider.pressed.haloWidth": {
    type: LENGTH,
    value: "4px"
  },
  "slider.pressed.halo.width": {
    type: LENGTH,
    value: {
      ref: "slider.pressed.haloWidth"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.pressed.haloWidth"
      }
    }
  },
  "slider.pressed.thumb.color": {
    type: COLOR,
    value: {
      ref: "slider.thumbColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.thumbColor"
      }
    }
  },
  "slider.track.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    },
    transform: {
      alpha: 0.2
    }
  },
  "slider.track.color": {
    type: COLOR,
    value: {
      ref: "slider.track.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.track.backgroundColor"
      }
    }
  },
  "slider.track.minHeight": {
    type: LENGTH,
    value: "2px"
  },
  "slider.track.width": {
    type: LENGTH,
    value: {
      ref: "slider.track.minHeight"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.track.minHeight"
      }
    }
  },
  "slider.value.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600"
    }
  },
  "slider.value.color": {
    type: COLOR,
    value: {
      ref: "slider.value.backgroundColor"
    },
    metadata: {
      deprecated: {
        equivalent: "slider.value.backgroundColor"
      }
    }
  },
  "slider.inputOverlay.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base"
    },
    transform: {
      alpha: 0.2
    }
  },
  "slider.thumb.minHeight": {
    type: LENGTH,
    value: "20px"
  }
};
