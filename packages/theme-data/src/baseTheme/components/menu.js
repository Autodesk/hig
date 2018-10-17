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
      ref: "basics.borderRadii.medium"
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
      ref: "colorScheme.baseColor"
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
      ref: "colorScheme.accentColor"
    },
    transform: {
      alpha: 0.1
    }
  },
  "menu.item.horizontalPadding": {
    type: "spacing",
    value: {
      ref: "density.spacings.extraSmall"
    }
  },
  "menu.item.verticalPadding": {
    type: "spacing",
    value: {
      ref: "basics.spacings.mediumSmall"
    }
  },
  "menu.item.minHeight": {
    type: "length",
    value: {
      ref: "density.spacings.large"
    }
  },
  "menu.item.gutterWidth": {
    type: "spacing",
    value: {
      ref: "basics.spacings.mediumSmall"
    }
  }
};
