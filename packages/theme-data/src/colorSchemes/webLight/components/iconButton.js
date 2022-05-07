import oldColors from "./_oldColors";

export default {
  "iconButton.iconColor": {
    value: oldColors["hig-cool-gray-60"],
  },
  "iconButton.hover.iconColor": {
    value: oldColors["hig-turquoise-50"],
  },
  "iconButton.focus.iconColor": {
    value: oldColors["hig-slate-40"],
  },
  "iconButton.focus.halo.color": {
    transform: {
      alpha: 0,
    },
  },
  "iconButton.pressed.iconColor": {
    value: {
      ref: "iconButton.focus.iconColor",
    },
  },
  "iconButton.pressed.backgroundColor": {
    transform: {
      alpha: 0,
    },
  },
};
