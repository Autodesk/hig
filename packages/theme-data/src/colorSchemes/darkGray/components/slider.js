export default {
  "slider.thumb.backgroundColor": {
    value: { ref: "basics.colors.charcoal100" }
  },
  // These color overrides specifying colorScheme.baseColor would not be necessary if darkBlue's baseColor were
  // basics.colors.darkBlue200. The darkGray theme inherits from darkBlue, so we must override darkBlue's override of
  // the baseTheme slider values in order to set the colors back to reference the theme baseColor.
  "slider.track.color": {
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.value.color": {
    value: { ref: "basics.colors.charcoal100" }
  },

  // Focused
  "slider.focused.thumb.color": {
    value: { ref: "basics.colors.charcoal100" }
  },

  // Hover
  "slider.hover.halo.color": {
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.hover.thumb.color": {
    value: { ref: "basics.colors.charcoal100" }
  },

  // Pressed
  "slider.pressed.thumb.color": {
    value: { ref: "basics.colors.charcoal100" }
  }
};
