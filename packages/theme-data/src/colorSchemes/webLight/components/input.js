import oldColors from "./_oldColors";

export default {
  "input.hover.borderBottomColor": {
    value: oldColors["hig-turquoise-50"],
  },
  "input.hover.halo.width": {
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "input.halo.color": {
    value: oldColors["hig-turquoise-50"],
  },
  "input.focus.halo.width": {
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "input.focus.halo.color": {
    value: {
      ref: "colorScheme.accentColor",
    },
  },
  "input.active.halo.width": {
    value: {
      ref: "basics.borderWidths.small",
    },
  },
  "input.active.halo.color": {
    value: {
      ref: "colorScheme.accentColor",
    },
  },
};
