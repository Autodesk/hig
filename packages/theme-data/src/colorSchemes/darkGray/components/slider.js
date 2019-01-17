export default {
  // TODO these color overrides would not be necessary if darkBlue's baseColor were basics.colors.darkBlue200. The
  // darkGray theme inherits from darkBlue, so we must override darkBlue's override on the baseTheme slider values in
  // order to set the colors back to reference the theme baseColor

  "slider.thumb.backgroundColor": {
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: "none" }
  },
  "slider.track.color": {
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.value.color": {
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: "none" }
  },

  // Focused
  "slider.focused.thumb.color": {
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: "none" }
  },

  // Hover
  "slider.hover.halo.color": {
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.hover.thumb.color": {
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: "none" }
  },

  // Pressed
  "slider.pressed.thumb.color": {
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: "none" }
  }
};
