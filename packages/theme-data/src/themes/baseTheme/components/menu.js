export default {
  "MENU.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.COMPONENT.BACKGROUND_COLOR"
    }
  },
  "MENU.BORDER_RADIUS": {
    type: "borderRadius",
    value: {
      ref: "BASICS.BORDER_RADII.M"
    }
  },
  "MENU.TOP_FLUSH_BORDER_TOP_RADIUS": {
    type: "borderRadius",
    value: {
      ref: "BASICS.BORDER_RADII.NONE"
    }
  },
  "MENU.ITEM.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.COMPONENT.BACKGROUND_COLOR"
    }
  },
  "MENU.ITEM.HOVER.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "BASICS.COLORS.CHARCOAL_600"
    },
    transform: {
      alpha: 0.1
    }
  },
  "MENU.ITEM.FOCUS.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "MENU.ITEM.HOVER.BACKGROUND_COLOR"
    }
  },
  "MENU.ITEM.ACTIVE.BACKGROUND_COLOR": {
    type: "color",
    value: {
      ref: "COLOR_SCHEME.ACCENT_COLOR_500"
    },
    transform: {
      alpha: 0.1
    }
  },
  "MENU.ITEM.HORIZONTAL_PADDING": {
    type: "spacing",
    value: {
      ref: "DENSITY.SPACINGS.XS"
    }
  },
  "MENU.ITEM.VERTICAL_PADDING": {
    type: "spacing",
    value: {
      ref: "BASICS.SPACINGS.MEDIUM_S"
    }
  },
  "MENU.ITEM.MIN_HEIGHT": {
    type: "length",
    value: {
      ref: "DENSITY.SPACINGS.L"
    }
  },
  "MENU.ITEM.GUTTER_WIDTH": {
    type: "spacing",
    value: {
      ref: "BASICS.SPACINGS.MEDIUM_S"
    }
  }
};
