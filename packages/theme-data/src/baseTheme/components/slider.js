import { COLOR, LENGTH, OPACITY } from "../../consts/types";

export default {
  "slider.halo.width": {
    type: LENGTH,
    value: "0"
  },
  "slider.thumb.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.thumb.width": {
    type: LENGTH,
    value: "12px"
  },
  "slider.track.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.track.width": {
    type: LENGTH,
    value: "2px"
  },
  "slider.value.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },

  // Focused
  "slider.focused.halo.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" }
  },
  "slider.focused.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "slider.focused.thumb.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },

  // Hover
  "slider.hover.halo.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },
  "slider.hover.halo.width": {
    type: LENGTH,
    value: "2px"
  },
  "slider.hover.thumb.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },

  // Pressed
  "slider.pressed.halo.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" }
  },
  "slider.pressed.halo.width": {
    type: LENGTH,
    value: "4px"
  },
  "slider.pressed.thumb.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  },

  // Disabled
  "slider.disabled.opacity": {
    type: OPACITY
  }
};
