export default {
  // These color overrides would not be necessary if darkBlue's baseColor were basics.colors.darkBlue200

  "slider.thumb.backgroundColor": {
    value: { ref: "basics.colors.darkBlue200" }
  },
  "slider.track.color": {
    value: { ref: "basics.colors.darkBlue200" }
  },
  "slider.value.color": {
    value: { ref: "basics.colors.darkBlue200" }
  },

  // Focused
  "slider.focused.halo.color": {
    transform: { alpha: 0.35 }
  },
  "slider.focused.thumb.color": {
    value: { ref: "basics.colors.darkBlue200" }
  },

  // Hover
  "slider.hover.halo.color": {
    value: { ref: "basics.colors.darkBlue200" }
  },
  "slider.hover.thumb.color": {
    value: { ref: "basics.colors.darkBlue200" }
  },

  // Pressed
  "slider.pressed.thumb.color": {
    value: { ref: "basics.colors.darkBlue200" }
  }
};
