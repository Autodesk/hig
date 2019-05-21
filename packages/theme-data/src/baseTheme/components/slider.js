import { COLOR, LENGTH } from "../../consts/types";

export default {
  "slider.halo.width": {
    type: LENGTH,
    value: "0"
  },
  "slider.halo.color": {
    type: COLOR,
    value: { ref: "basics.colors.white" }
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
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.2 }
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
    value: { ref: "colorScheme.accentColor" },
    transform: { alpha: 0.35 }
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
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.15 }
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
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.25 }
  },
  "slider.pressed.halo.width": {
    type: LENGTH,
    value: "4px"
  },
  "slider.pressed.thumb.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" }
  }
};
