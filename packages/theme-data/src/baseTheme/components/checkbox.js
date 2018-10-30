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
    transform: {
      alpha: 0.5
    },
    value: {
      ref: "colorScheme.baseColor"
    }
  },
  "checkbox.borderWidth": {
    type: BORDER_WIDTH,
    value: {
      ref: "input.borderBottomWidth"
    }
  },
  "checkbox.borderRadius": {
    type: BORDER_RADIUS,
    value: {
      ref: "basics.borderRadii.small"
    }
  },
  "checkbox.halo.color": {
    type: COLOR,
    value: {
      ref: "input.halo.color"
    }
  },
  "checkbox.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.halo.width"
    }
  },
  "checkbox.labelSpacing": {
    type: LENGTH,
    value: {
      ref: "density.spacings.small"
    }
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
      ref: "input.hover.halo.width"
    }
  },
  "checkbox.hover.halo.color": {
    type: COLOR,
    value: {
      ref: "input.halo.color"
    }
  },

  // Focus
  "checkbox.focus.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.focus.halo.color": {
    type: COLOR,
    value: {
      ref: "input.focus.halo.color"
    }
  },
  "checkbox.focus.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.focus.halo.width"
    }
  },

  // Active
  "checkbox.active.borderColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alpha: 0.5
    }
  },
  "checkbox.active.halo.color": {
    type: COLOR,
    value: {
      ref: "input.active.halo.color"
    }
  },
  "checkbox.active.halo.width": {
    type: LENGTH,
    value: {
      ref: "input.active.halo.width"
    }
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

  // Disabled
  "checkbox.disabled.borderColor": {
    type: COLOR,
    value: {
      ref: "input.disabled.borderColor"
    }
  },

  // Disabled + Checked
  "checkbox.disabled.checked.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.baseColor"
    },
    transform: {
      alhpa: 0.5
    }
  }
};
