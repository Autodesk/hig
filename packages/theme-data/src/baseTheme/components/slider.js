import { COLOR, LENGTH } from "../../consts/types";

export default {
  "slider.hover.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.hover",
    },
  },
  "slider.focus.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.focus",
    },
  },
  "slider.pressed.haloColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.halo.pressed",
    },
  },
  "slider.hover.haloWidth": {
    type: LENGTH,
    value: "2px",
  },
  "slider.focus.haloWidth": {
    type: LENGTH,
    value: "2px",
  },
  "slider.pressed.haloWidth": {
    type: LENGTH,
    value: "4px",
  },
  "slider.thumb.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
  },
  "slider.thumb.minWidth": {
    type: LENGTH,
    value: "6px",
  },
  "slider.thumb.minHeight": {
    type: LENGTH,
    value: "20px",
  },
  "slider.track.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
    transform: {
      alpha: 0.2,
    },
  },
  "slider.track.minHeight": {
    type: LENGTH,
    value: "2px",
  },
  "slider.value.backgroundColor": {
    type: COLOR,
    value: {
      ref: "basics.colors.primary.charcoal.600",
    },
  },
  "slider.inputOverlay.backgroundColor": {
    type: COLOR,
    value: {
      ref: "colorScheme.reference.base",
    },
    transform: {
      alpha: 0.2,
    },
  },
};
