import oldColors from "./_oldColors";

export default {
  "slider.halo.width": {
    value: "2px"
  },
  "slider.thumb.backgroundColor": {
    value: oldColors["hig-cool-gray-20"]
  },
  "slider.thumb.width": {
    value: "16px"
  },
  "slider.track.color": {
    value: oldColors["hig-cool-gray-20"]
  },
  "slider.value.color": {
    value: oldColors["hig-cool-gray-20"]
  },

  // focused
  "slider.focused.halo.color": {
    value: { ref: "basics.colors.white" },
    transform: { alpha: 1 }
  },
  "slider.focused.thumb.color": {
    value: oldColors["hig-blue-50"]
  },

  // hover
  "slider.hover.halo.color": {
    value: { ref: "basics.colors.white" },
    transform: { alpha: 1 }
  },
  "slider.hover.thumb.color": {
    value: oldColors["hig-turquoise-50"]
  },

  // pressed
  "slider.pressed.halo.color": {
    value: { ref: "basics.colors.white" },
    transform: { alpha: 1 }
  },
  "slider.pressed.thumb.color": {
    value: oldColors["hig-blue-60"]
  }
};
