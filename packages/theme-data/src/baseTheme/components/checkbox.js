import { COLOR, BORDER_WIDTH, BORDER_RADIUS, LENGTH } from "../../consts/types";

export default {
  "checkbox.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.component.backgroundColor"
    }
  },
  "checkbox.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.borderWidth": {
    type: BORDER_WIDTH,
    value: "1px"
  },
  "checkbox.borderRadius": {
    type: BORDER_RADIUS,
    value: 0
  },
  "checkbox.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.15
    }
  },
  "checkbox.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "checkbox.height": {
    type: LENGTH,
    value: "16px"
  },
  "checkbox.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.white"
    }
  },
  "checkbox.width": {
    type: LENGTH,
    value: "16px"
  },

  // Hover
  "checkbox.hover.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.hover.halo.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.halo.width"
    }
  },
  "checkbox.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "checkbox.halo.color"
    }
  },

  // Focus
  "checkbox.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.35
    }
  },
  "checkbox.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "checkbox.halo.width"
    }
  },

  // Pressed
  "checkbox.pressed.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.pressed.halo.color": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.25
    }
  },
  "checkbox.pressed.halo.width": {
    type: LENGTH,
    value: "4px"
  },

  // Checked
  "checkbox.checked.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "checkbox.checked.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.white"
    }
  },
  "checkbox.checked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },

  // Indeterminate
  "checkbox.indeterminate.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "checkbox.indeterminate.iconColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.white"
    }
  },
  "checkbox.indeterminate.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    }
  },

  // Legacy Web Light Specific
  "checkbox.focus.checked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "checkbox.backgroundColor"
    }
  },
  "checkbox.focus.checked.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.focus.indeterminate.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  }
};
