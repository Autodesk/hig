export default {
  "menu.backgroundColor": {
    type: "color",
    value: {
      ref: "colorScheme.component.backgroundColor"
    }
  },
  "menu.borderRadius": {
    type: "borderRadius",
    value: {
      ref: "basics.borderRadii.m"
    }
  },
  "menu.topFlushBorderTopRadius": {
    type: "borderRadius",
    value: {
      ref: "basics.borderRadii.none"
    }
  },
  "menu.item.backgroundColor": {
    type: "color",
    value: {
      ref: "colorScheme.component.backgroundColor"
    }
  },
  "menu.item.hover.backgroundColor": {
    type: "color",
    value: {
      ref: "basics.colors.charcoal600"
    },
    transform: {
      alpha: 0.1
    }
  },
  "menu.item.focus.backgroundColor": {
    type: "color",
    value: {
      ref: "menu.item.hover.backgroundColor"
    }
  },
  "menu.item.active.backgroundColor": {
    type: "color",
    value: {
      ref: "colorScheme.accentColor500"
    },
    transform: {
      alpha: 0.1
    }
  },
  "menu.item.horizontalPadding": {
    type: "spacing",
    value: {
      ref: "density.spacings.xs"
    }
  },
  "menu.item.verticalPadding": {
    type: "spacing",
    value: {
      ref: "basics.spacings.mediumS"
    }
  },
  "menu.item.minHeight": {
    type: "length",
    value: {
      ref: "density.spacings.l"
    }
  },
  "menu.item.gutterWidth": {
    type: "spacing",
    value: {
      ref: "basics.spacings.mediumS"
    }
  }
};
